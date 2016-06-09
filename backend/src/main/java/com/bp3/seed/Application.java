package com.bp3.seed;

import com.bp3.seed.conf.ConfMarker;
import com.bp3.seed.repo.RepoMarker;
import com.bp3.seed.rest.RestMarker;
import com.bp3.seed.service.ServiceMarker;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.boot.builder.SpringApplicationBuilder;
import org.springframework.boot.context.web.SpringBootServletInitializer;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;

/**
 * @author dparish
 */
@Configuration
@EnableAutoConfiguration
@ComponentScan(basePackageClasses =
        {ConfMarker.class, RepoMarker.class, RestMarker.class, ServiceMarker.class}
)
public class Application extends SpringBootServletInitializer {

    /**
     * This method is here so that we can deploy in a servlet container.
     * @param application The spring app
     * @return The rest of the builder
     */
    @Override
    protected SpringApplicationBuilder configure(final SpringApplicationBuilder application) {
        return application.sources(Application.class);
    }


    /**
     * Stars the spring boot app.
     * @param args The args for the app (probably not needed)
     */
    public static void main(final String[] args) {
        SpringApplication.run(Application.class, args);
    }
}
