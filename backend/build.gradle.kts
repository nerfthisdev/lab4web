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
    implementation("org.jboss.resteasy:resteasy-jaxrs:3.15.6.Final")
}

tasks.test {
    useJUnitPlatform()
}