package com.javaclimb.houserent.mapper;

import com.baomidou.mybatisplus.core.mapper.BaseMapper;
import com.javaclimb.houserent.entity.Mark;
import org.apache.ibatis.annotations.Mapper;
import org.springframework.stereotype.Repository;

/**
 * 收藏mapper层
 */
@Mapper
@Repository
public interface MarkMapper extends BaseMapper<Mark> {
}
