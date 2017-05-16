package com.sm.service.mapper;

import com.sm.domain.*;
import com.sm.service.dto.RegionDTO;

import org.mapstruct.*;
import java.util.List;

/**
 * Mapper for the entity Region and its DTO RegionDTO.
 */
@Mapper(componentModel = "spring", uses = {})
public interface RegionMapper {

    RegionDTO regionToRegionDTO(Region region);

    List<RegionDTO> regionsToRegionDTOs(List<Region> regions);

    Region regionDTOToRegion(RegionDTO regionDTO);

    List<Region> regionDTOsToRegions(List<RegionDTO> regionDTOs);
}
