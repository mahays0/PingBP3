package com.bp3.seed.conf;

import com.google.common.base.Strings;
import com.google.common.primitives.Longs;
import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.context.annotation.Configuration;

import java.util.Date;

/**
 * @author dparish
 */
@Configuration
@ConfigurationProperties(locations = {"classpath:bp3.version.properties"})
public class VersionProperties {
    private Date date;
    private String commit;
    private String version;

    public Date getDate() {
        return date == null ? null : new Date((date.getTime()));
    }

    /**
     * @param dateTimeString The date.
     * @return this.
     */
    public VersionProperties setDate(final String dateTimeString) {
        if (!Strings.isNullOrEmpty(dateTimeString)) {
            Long dateTime = Longs.tryParse(dateTimeString);
            if (dateTime != null) {
                this.date = new Date(dateTime);
            } else {
                this.date = new Date();
            }
        }
        return this;
    }


    public String getCommit() {
        return commit;
    }

    /**
     * @param commit the commit.
     * @return this.
     */
    public VersionProperties setCommit(final String commit) {
        this.commit = commit;
        return this;
    }

    public String getVersion() {
        return version;
    }

    /**
     *
     * @param version the version.
     * @return this.
     */
    public VersionProperties setVersion(final String version) {
        this.version = version;
        return this;
    }
}
