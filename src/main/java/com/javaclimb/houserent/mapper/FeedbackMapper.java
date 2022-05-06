package com.javaclimb.houserent.mapper;

import com.baomidou.mybatisplus.core.mapper.BaseMapper;
import com.javaclimb.houserent.entity.Feedback;
import org.apache.ibatis.annotations.Mapper;
import org.springframework.stereotype.Repository;

/**
 * 用户反馈mapper
 */
@Mapper
@Repository
public interface FeedbackMapper extends BaseMapper<Feedback> {
}
