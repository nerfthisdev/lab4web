package elasticlogic;

import co.elastic.clients.elasticsearch.ElasticsearchClient;
import co.elastic.clients.elasticsearch.core.IndexResponse;
import co.elastic.clients.elasticsearch.core.SearchRequest;
import co.elastic.clients.elasticsearch.core.search.Hit;
import co.elastic.clients.json.jackson.JacksonJsonpMapper;
import co.elastic.clients.transport.ElasticsearchTransport;
import co.elastic.clients.transport.rest_client.RestClientTransport;
import com.fasterxml.jackson.databind.ObjectMapper;
import data.Point;
import jakarta.annotation.PostConstruct;
import jakarta.enterprise.context.ApplicationScoped;
import jakarta.inject.Named;
import org.apache.http.Header;
import org.apache.http.HttpHost;
import org.apache.http.message.BasicHeader;
import org.elasticsearch.client.RestClient;
import org.elasticsearch.common.UUIDs;
import java.io.IOException;
import java.io.Serializable;
import java.util.List;


@Named
@ApplicationScoped
public class ElasticClient implements Serializable {
    String serverUrl = "http://localhost:9200";
    String apiKey = "QkdUNzlKTUJkY3FFcXFrcjIwOVE6TWx1MWFfQlRSZTJkYTF5SWtxcHdIUQ==";

    RestClient restClient = RestClient
            .builder(HttpHost.create(serverUrl))
            .setDefaultHeaders(new Header[]{
                    new BasicHeader("Authorization", "ApiKey " + apiKey)
            })
            .build();

    ElasticsearchTransport transport = new RestClientTransport(
            restClient, new JacksonJsonpMapper());

    ElasticsearchClient esClient = new ElasticsearchClient(transport);

    @PostConstruct
    public void init() {
        try {
            if(!esClient.indices().exists(e -> e.index("points")).value()) {
                esClient.indices().create(c -> c.index("points"));
            }
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    public String getPoints() throws IOException {
        SearchRequest sr = SearchRequest.of(r -> r.index("points").size(10000));
        StringBuilder res = new StringBuilder("[ ");
        var response = esClient.search(sr, Point.class);
        ObjectMapper objectMapper = new ObjectMapper();
        List<Hit<Point>> hits = response.hits().hits();
        for (Hit<Point> hit: hits) {
            Point point = hit.source();
            res.append(objectMapper.writeValueAsString(point)).append(", ");
        }
        res.replace(res.length()-2, res.length(), "]");

        return res.toString();
    }

    public IndexResponse addPoint(Point point) throws IOException {
        IndexResponse response = esClient.index(i -> i
                .index("points")
                .id(UUIDs.base64TimeBasedUUID())
                .document(point)
        );
        return response;
    }
}
