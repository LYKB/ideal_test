package com.javaclimb.houserent.entity;

import com.baomidou.mybatisplus.annotation.TableField;
import com.baomidou.mybatisplus.annotation.TableName;
import com.javaclimb.houserent.common.base.BaseEntity;
import lombok.Data;
import lombok.EqualsAndHashCode;

/**
 * 收藏
 */
@EqualsAndHashCode(callSuper = true)
@Data
@TableName("t_mark")
public class Mark extends BaseEntity {
    /**
     * 收藏者ID
     */
    private Long userId;

    /**
     * 房子Id
     */
    private Long houseId;

    /**
     * 房子信息
     */
    @TableField(exist = false)
    private House house;
}
