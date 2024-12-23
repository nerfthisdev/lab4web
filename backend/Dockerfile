FROM quay.io/wildfly/wildfly:latest
COPY build/libs/backend.war /opt/jboss/wildfly/standalone/deployments/backend.war
EXPOSE 8080
CMD ["/opt/jboss/wildfly/bin/standalone.sh", "-b", "0.0.0.0"]
