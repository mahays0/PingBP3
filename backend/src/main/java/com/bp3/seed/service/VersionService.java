package com.bp3.seed.service;

import com.bp3.seed.common.model.VersionInfo;
import com.bp3.seed.conf.VersionProperties;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.annotation.PostConstruct;

/**
 * @author dparish
 */
@Service
public class VersionService {

    private static final Logger LOGGER = LoggerFactory.getLogger(VersionService.class);

    private VersionProperties versionProperties;

    /**
     * Constructor to add in injection.
     * @param versionProperties The version properties
     */
    @Autowired
    public VersionService(final VersionProperties versionProperties) {
        this.versionProperties = versionProperties;
    }

    /**
     * Log version info to the logs.
     */
    @PostConstruct
    private void init() {
        VersionInfo info = getVersion();
        LOGGER.info("Started Seed\n"
                + "\tVersion:" + info.getVersion()
                + "\n\tBuild:" + info.getBuild()
                + "\n\tBuild Date:" + info.getDate()
        );
    }

    public VersionInfo getVersion() {
        return new VersionInfo()
                .withBuild(versionProperties.getCommit())
                .withDate(versionProperties.getDate())
                .withVersion(versionProperties.getVersion());
    }


}
