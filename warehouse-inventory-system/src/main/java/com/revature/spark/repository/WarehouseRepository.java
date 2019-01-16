package com.revature.spark.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.revature.spark.beans.Warehouse;

@Repository
public interface WarehouseRepository extends JpaRepository<Warehouse, Integer>{}
