package com.bp3.seed.model;

import java.util.Date;

/**
 * @author dparish
 */
public class VersionInfo {

    private String build;
    private Date date;
    private String version;

    public String getBuild() {
        return build;
    }

    public VersionInfo setBuild(final String build) {
        this.build = build;
        return this;
    }

    public Date getDate() {
        return (date == null) ? null : new Date(date.getTime());
    }

    public VersionInfo setDate(final Date date) {
        this.date = (date == null) ? null : new Date(date.getTime());
        return this;
    }

    public String getVersion() {
        return version;
    }

    public VersionInfo setVersion(final String version) {
        this.version = version;
        return this;
    }
}
