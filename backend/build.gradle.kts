plugins {
    id("java")
    id("war")
}

group = "space.nerfthis"

repositories {
    mavenCentral()
}

dependencies {
    testImplementation(platform("org.junit:junit-bom:5.10.0"))
    testImplementation("org.junit.jupiter:junit-jupiter")
    compileOnly("jakarta.platform:jakarta.jakartaee-api:10.0.0")
    implementation(platform("org.glassfish.jersey:jersey-bom:3.1.2"))
    implementation("org.glassfish.jersey.containers:jersey-container-servlet")
    implementation("org.glassfish.jersey.inject:jersey-hk2")
    implementation("com.google.code.gson:gson:2.11.0")
    implementation("co.elastic.clients:elasticsearch-java:8.17.0")
    implementation("com.fasterxml.jackson.core:jackson-databind:2.17.0")
    implementation("org.elasticsearch:elasticsearch:8.17.0")
    implementation("io.jsonwebtoken:jjwt-api:0.11.5")
    implementation("io.jsonwebtoken:jjwt-impl:0.11.5")
    implementation("io.jsonwebtoken:jjwt-jackson:0.11.5")
    implementation("org.postgresql:postgresql:42.6.0")
    implementation("org.mindrot:jbcrypt:0.4")
}

tasks.test {
    useJUnitPlatform()
}