package com.bp3.seed.rest;

import com.bp3.seed.conf.Constants;
import com.bp3.seed.model.VersionInfo;
import com.bp3.seed.service.VersionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

/**
 * @author dparish
 */
@RestController
@RequestMapping(value = Constants.REST_BASE_PATH)
public class VersionController {

    private VersionService versionService;

    /**
     * Constructor for injection.
     * @param versionService The version Service.
     */
    @Autowired
    public VersionController(final VersionService versionService) {
        this.versionService = versionService;
    }

    @RequestMapping(value = "/version", method = RequestMethod.GET)
    public VersionInfo getVersion() {
        return versionService.getVersion();
    }
}
