CREATE DATABASE WareHouse;

USE WareHouse;

CREATE TABLE `countries` (
    `country_id` INT NOT NULL AUTO_INCREMENT,
    `country_name` CHAR(20),
    PRIMARY KEY (`country_id`)
);

CREATE TABLE `states` (
    `state_id` INT NOT NULL AUTO_INCREMENT,
    `state_name` CHAR(20),
    `country_id` INT,
    PRIMARY KEY (`state_id`),
    FOREIGN KEY (`country_id`) REFERENCES countries(`country_id`)
);

CREATE TABLE `cities` (
    `city_id` INT NOT NULL AUTO_INCREMENT,
    `city_name` CHAR(20),
    `state_id` INT,
    PRIMARY KEY (`city_id`),
    FOREIGN KEY (`state_id`) REFERENCES states(`state_id`)
);

CREATE TABLE `warehouses` (
    `warehouse_id` INT NOT NULL AUTO_INCREMENT,
    `warehouse_name` CHAR(30),
    `location` CHAR(30),
    `extra_context` JSON,
    `city_id` INT,
    PRIMARY KEY (`warehouse_id`),
    FOREIGN KEY (`city_id`) REFERENCES cities (`city_id`)
);

CREATE TABLE `stores` (
    `store_id` INT NOT NULL AUTO_INCREMENT,
    `store_name` CHAR(30),
    `location_city` CHAR(30),
    `warehouse_id` INT,
    PRIMARY KEY (`store_id`),
    FOREIGN KEY (`warehouse_id`) REFERENCES warehouses(`warehouse_id`)
);

CREATE TABLE `customer` (
    `customer_id` INT NOT NULL AUTO_INCREMENT,
    `customer_name` CHAR(50),
    `address` CHAR(50),
    `city_name` CHAR(30),
    PRIMARY KEY (`customer_id`)
);

CREATE TABLE `orders` (
    `order_id` INT NOT NULL AUTO_INCREMENT,
    `order_date` DATE,
    `customer_id` INT,
    PRIMARY KEY (`order_id`),
    FOREIGN KEY (`customer_id`) REFERENCES customer (`customer_id`)
);

CREATE TABLE `items` (
    `item_id` INT NOT NULL AUTO_INCREMENT,
    `description` CHAR(100),
    `weight` DECIMAL(5, 2),
    `cost` DECIMAL(5, 2),
    PRIMARY KEY (`item_id`)
);

CREATE TABLE `order_details` (
    `order_detail_id` INT NOT NULL AUTO_INCREMENT,
    `order_id` INT,
    `item_id` INT,
    `item_quantity` INT,
    PRIMARY KEY (`order_detail_id`),
    FOREIGN KEY (`item_id`) REFERENCES items(`item_id`),
    FOREIGN KEY (`order_id`) REFERENCES orders (`order_id`)
);

CREATE TABLE `store_items` (
    `store_item_id` INT NOT NULL AUTO_INCREMENT,
    `store_id` INT,
    `item_id` INT,
    `available_quantity` INT,
    PRIMARY KEY (`store_item_id`),
    FOREIGN KEY (`store_id`) REFERENCES stores(`store_id`),
    FOREIGN KEY (`item_id`) REFERENCES items(`item_id`)
);