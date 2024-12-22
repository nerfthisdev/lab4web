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
}

tasks.test {
    useJUnitPlatform()
}