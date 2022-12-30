-- MySQL dump 10.13  Distrib 8.0.31, for Win64 (x86_64)
--
-- Host: localhost    Database: test
-- ------------------------------------------------------
-- Server version	8.0.31

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `credentials`
--

DROP TABLE IF EXISTS `credentials`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `credentials` (
  `id` int NOT NULL AUTO_INCREMENT,
  `username` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `role` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `credentials`
--

LOCK TABLES `credentials` WRITE;
/*!40000 ALTER TABLE `credentials` DISABLE KEYS */;
INSERT INTO `credentials` VALUES (1,'admin','admin@gmail.com','$2a$08$YZzV7K2BVPazH99B.3z3GejE0fMTDIevqQ1uSNFLGJJjEsOncQiJu','admin'),(2,'factory','factory@factory.com','$2a$08$/1xTD9T5Th5RCKwKKNRo4uF6soc8F7168EpFklHMtVB7BKPMf.cYW','factory'),(3,'store','store@store.com','$2a$08$Sp48VNo9a.A8Komr0r6ICuPr6r4UuSQHYmoGzE/7R4RK533aVKbzK','store'),(4,'servicecenter','servicecenter@servicecenter.com','$2a$08$LNdSKXNwt5a.fTgu5A/Ch.eB4iFs55WoC9mrLDXyPnIXgtLIxCuOG','servicecenter'),(5,'fac1','fac1@gmail.com','$2a$08$fNGKWyCMV.gbi5f1nb4NBuHHX.LZCf1wwgTw.c/wE5Msg1EjmsGka','factory'),(6,'store1','store1@factory.com','$2a$08$aSyg4r1q.C17b/MYXGzq2emORPVxfX0wV.pfMVqg3Ycg4FpayjOnW','store'),(7,'store2','store2@factory.com','$2a$08$vmOHjaCeEMGrF3QzkTu0vuO2F0J8fKRODGSQMrwHOnBDIgN.8UmaC','store'),(10,'store3','store3@factory.com','$2a$08$WahSCF/ilbEFRKH6VrRE6eHwyvfTP.XjTLxda0D04soDFT3bT.WdC','store'),(11,'service1','service1@factory.com','$2a$08$zQCd/F/23FeKoGEZh2OLouIr75028VlNZwgzn4gHtSmgSKkLscO7G','servicecenter'),(12,'fac01','fac01@factory.com','$2a$08$luLMSaj0iPWkYtgPUeijyuEhZ0sbkRF7zEYyU4Md6JAh8L./CpBjq','factory');
/*!40000 ALTER TABLE `credentials` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `customers`
--

DROP TABLE IF EXISTS `customers`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `customers` (
  `customerID` varchar(255) NOT NULL,
  `customerName` varchar(255) NOT NULL,
  `customerPhone` varchar(255) NOT NULL,
  `customerAddress` varchar(255) NOT NULL,
  `productID` varchar(255) NOT NULL,
  PRIMARY KEY (`customerID`),
  KEY `productID` (`productID`),
  CONSTRAINT `customers_ibfk_1` FOREIGN KEY (`productID`) REFERENCES `products` (`productID`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `customers`
--

LOCK TABLES `customers` WRITE;
/*!40000 ALTER TABLE `customers` DISABLE KEYS */;
INSERT INTO `customers` VALUES ('1','Nguyen Hai Phong','345753828','Ha Noi','MAMG'),('10','Pham Xuan Truong','456987345','Ha Noi','B7'),('11','Pham Thu Ha','654234897','Ha Noi','MS'),('12','Le Dinh Thanh','648979234','Ha Noi','AR8'),('13','Le Dinh Thanh','648979234','Ha Noi','ATT'),('14','Nguyen Hai Phong','243465234','Ha Noi','BX'),('2','Nguyen Hai Phong','243465234','Ha Noi','AR8'),('3','Nguyen Tien Quang','534545323','Ha Noi','AQ7'),('4','Nguyen Tien Manh','757657675','Ha Noi','ATT'),('5','Hoang Thuy Duong','645654654','Ha Noi','B4'),('6','Vu Hai Dang','538489921','Ha Noi','MG'),('7','Hoang Thuy Duong','908594893','Ha Noi','MS'),('8','Bui Duy Tan','798068238','Ha Noi','MAMG'),('9','Nguyen Tien Quang','534545323','Ha Noi','B7');
/*!40000 ALTER TABLE `customers` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `export_to_store`
--

DROP TABLE IF EXISTS `export_to_store`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `export_to_store` (
  `id` int NOT NULL AUTO_INCREMENT,
  `storeID` varchar(255) NOT NULL,
  `warehouseID` varchar(255) NOT NULL,
  `productID` varchar(255) NOT NULL,
  `numberOfProduct` int NOT NULL,
  PRIMARY KEY (`id`),
  KEY `storeID` (`storeID`),
  KEY `warehouseID` (`warehouseID`),
  CONSTRAINT `export_to_store_ibfk_1` FOREIGN KEY (`storeID`) REFERENCES `stores` (`storeID`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `export_to_store_ibfk_2` FOREIGN KEY (`warehouseID`) REFERENCES `warehouse` (`warehouseID`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `export_to_store`
--

LOCK TABLES `export_to_store` WRITE;
/*!40000 ALTER TABLE `export_to_store` DISABLE KEYS */;
INSERT INTO `export_to_store` VALUES (2,'BTL1','DD','BMW i7',12),(3,'TX1','DC','BMW iX',12),(4,'TX1','DC','MAMG',12);
/*!40000 ALTER TABLE `export_to_store` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `export_to_store_warehouse`
--

DROP TABLE IF EXISTS `export_to_store_warehouse`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `export_to_store_warehouse` (
  `id` int NOT NULL AUTO_INCREMENT,
  `storeID` varchar(255) NOT NULL,
  `storeWarehouseID` varchar(255) NOT NULL,
  `productID` varchar(255) NOT NULL,
  `numberOfProduct` int NOT NULL,
  PRIMARY KEY (`id`),
  KEY `storeID` (`storeID`),
  KEY `storeWarehouseID` (`storeWarehouseID`),
  CONSTRAINT `export_to_store_warehouse_ibfk_1` FOREIGN KEY (`storeID`) REFERENCES `stores` (`storeID`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `export_to_store_warehouse_ibfk_2` FOREIGN KEY (`storeWarehouseID`) REFERENCES `store_warehouse` (`storeWarehouseID`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `export_to_store_warehouse`
--

LOCK TABLES `export_to_store_warehouse` WRITE;
/*!40000 ALTER TABLE `export_to_store_warehouse` DISABLE KEYS */;
INSERT INTO `export_to_store_warehouse` VALUES (1,'BTL1','BD1','B7',12),(2,'BTL1','NTL1','Audi',11);
/*!40000 ALTER TABLE `export_to_store_warehouse` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `export_to_warehouse`
--

DROP TABLE IF EXISTS `export_to_warehouse`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `export_to_warehouse` (
  `id` int NOT NULL AUTO_INCREMENT,
  `warehouseID` varchar(255) NOT NULL,
  `factoryID` varchar(255) NOT NULL,
  `productLine` varchar(255) NOT NULL,
  `numberOfProduct` int NOT NULL,
  PRIMARY KEY (`id`),
  KEY `warehouseID` (`warehouseID`),
  KEY `factoryID` (`factoryID`),
  CONSTRAINT `export_to_warehouse_ibfk_1` FOREIGN KEY (`warehouseID`) REFERENCES `warehouse` (`warehouseID`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `export_to_warehouse_ibfk_2` FOREIGN KEY (`factoryID`) REFERENCES `factories` (`factoryID`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `export_to_warehouse`
--

LOCK TABLES `export_to_warehouse` WRITE;
/*!40000 ALTER TABLE `export_to_warehouse` DISABLE KEYS */;
INSERT INTO `export_to_warehouse` VALUES (1,'DC','TX','BMW',12),(3,'DD','BTL','Audi',12);
/*!40000 ALTER TABLE `export_to_warehouse` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `factories`
--

DROP TABLE IF EXISTS `factories`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `factories` (
  `factoryID` varchar(255) NOT NULL,
  `numberOfProduct` int NOT NULL,
  `phone` varchar(255) NOT NULL,
  `address` varchar(255) NOT NULL,
  `state` varchar(255) NOT NULL,
  `country` varchar(255) NOT NULL,
  PRIMARY KEY (`factoryID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `factories`
--

LOCK TABLES `factories` WRITE;
/*!40000 ALTER TABLE `factories` DISABLE KEYS */;
INSERT INTO `factories` VALUES ('BTL',432,'45238349','Bắc Từ Liêm','Hà Nội','Việt Nam'),('CG',100,'45234532','Cầu Giấy','Hà Nội','Việt Nam'),('HD',189,'56347534','Hà Đông','Hà Nội','Việt Nam'),('TX',299,'5738499','Thanh Xuân','Hà Nội','Việt Nam');
/*!40000 ALTER TABLE `factories` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `orderdetails`
--

DROP TABLE IF EXISTS `orderdetails`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `orderdetails` (
  `id` int NOT NULL AUTO_INCREMENT,
  `orderID` int NOT NULL,
  `productID` varchar(255) NOT NULL,
  `quantityOrdered` int NOT NULL,
  `priceEach` decimal(10,0) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `orderID` (`orderID`),
  KEY `productID` (`productID`),
  CONSTRAINT `orderdetails_ibfk_1` FOREIGN KEY (`orderID`) REFERENCES `orders` (`orderID`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `orderdetails_ibfk_2` FOREIGN KEY (`productID`) REFERENCES `products` (`productID`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `orderdetails`
--

LOCK TABLES `orderdetails` WRITE;
/*!40000 ALTER TABLE `orderdetails` DISABLE KEYS */;
INSERT INTO `orderdetails` VALUES (1,101,'MAMG',2,139000),(2,102,'AR8',1,142700),(3,103,'AQ7',2,59200),(4,104,'ATT',1,50000),(5,105,'B4',1,63700),(6,106,'MG',1,119000),(7,107,'MS',3,199000),(8,108,'MAMG',1,139000),(9,109,'BX',1,108900),(10,110,'B7',1,119300),(11,111,'MS',2,199000),(12,112,'AR8',3,142700),(13,113,'ATT',3,50000),(14,114,'BX',1,108900);
/*!40000 ALTER TABLE `orderdetails` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `orders`
--

DROP TABLE IF EXISTS `orders`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `orders` (
  `orderID` int NOT NULL,
  `orderDate` date NOT NULL,
  `status` varchar(255) NOT NULL,
  `comment` varchar(255) DEFAULT NULL,
  `customerID` varchar(255) NOT NULL,
  PRIMARY KEY (`orderID`),
  KEY `customerID` (`customerID`),
  CONSTRAINT `orders_ibfk_1` FOREIGN KEY (`customerID`) REFERENCES `customers` (`customerID`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `orders`
--

LOCK TABLES `orders` WRITE;
/*!40000 ALTER TABLE `orders` DISABLE KEYS */;
INSERT INTO `orders` VALUES (101,'2022-11-17','Shipping',NULL,'1'),(102,'2022-02-12','Shipping','Check on availability.','2'),(103,'2022-03-12','Shipping',NULL,'3'),(104,'2021-12-12','Shipped','Customer requested warranty','4'),(105,'2022-05-11','Shipping',NULL,'5'),(106,'2022-12-12','Shipping','Check on availability.','6'),(107,'2021-12-30','Shipped',NULL,'7'),(108,'2022-01-01','Shipped','Customer requested warranty','8'),(109,'2022-11-06','Shipping',NULL,'9'),(110,'2022-08-23','Shipped','Customer requested warranty','10'),(111,'2022-01-06','Shipping','Check on availability.','11'),(112,'2021-06-29','Shipping',NULL,'12'),(113,'2021-09-12','Shipped','Customer requested warranty','13'),(114,'2022-08-30','Shipped',NULL,'14'),(115,'2022-12-29','','','14');
/*!40000 ALTER TABLE `orders` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `product_recall`
--

DROP TABLE IF EXISTS `product_recall`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `product_recall` (
  `productLine` varchar(255) NOT NULL,
  `customerID` varchar(255) NOT NULL,
  `servicecenterID` varchar(255) NOT NULL,
  `status` varchar(255) NOT NULL,
  `id` varchar(255) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `productLine` (`productLine`),
  KEY `customerID` (`customerID`),
  KEY `servicecenterID` (`servicecenterID`),
  CONSTRAINT `product_recall_ibfk_1` FOREIGN KEY (`productLine`) REFERENCES `productlines` (`productLine`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `product_recall_ibfk_2` FOREIGN KEY (`customerID`) REFERENCES `customers` (`customerID`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `product_recall_ibfk_3` FOREIGN KEY (`servicecenterID`) REFERENCES `servicecenters` (`servicecenterID`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `product_recall`
--

LOCK TABLES `product_recall` WRITE;
/*!40000 ALTER TABLE `product_recall` DISABLE KEYS */;
INSERT INTO `product_recall` VALUES ('Audi','4','DD','Malfunctioning sensors','2'),('BMW','9','HK','Excessive Oil Consumption','4'),('Audi','12','LB','Electrical faults','5'),('BMW','14','TH','Transmission Fluid Leaks','6'),('Mercedes','1','BD','Electrical faults','7'),('Mercedes','7','HK','Excessive Oil Consumption','8'),('Mercedes','11','BD','Malfunctioning sensors','9');
/*!40000 ALTER TABLE `product_recall` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `productlines`
--

DROP TABLE IF EXISTS `productlines`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `productlines` (
  `productLine` varchar(255) NOT NULL,
  `storeID` varchar(255) NOT NULL,
  `description` varchar(255) NOT NULL,
  `importDate` date NOT NULL,
  PRIMARY KEY (`productLine`),
  KEY `storeID` (`storeID`),
  CONSTRAINT `productlines_ibfk_1` FOREIGN KEY (`storeID`) REFERENCES `stores` (`storeID`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `productlines`
--

LOCK TABLES `productlines` WRITE;
/*!40000 ALTER TABLE `productlines` DISABLE KEYS */;
INSERT INTO `productlines` VALUES ('Audi','TX1','Front-engine, front-wheel/all-wheel drive four-seater','2020-12-30'),('BMW','HD1','Mid-size luxury SUV','2021-01-25'),('Ferrari','BTL1',' Italian luxury sports car manufacturer based in Maranello, Italy.','2021-11-17'),('Lambor','BTL1','BMW','2022-01-01'),('Mercedes','BTL1','Compact executive luxury','2022-05-29');
/*!40000 ALTER TABLE `productlines` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `products`
--

DROP TABLE IF EXISTS `products`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `products` (
  `productID` varchar(255) NOT NULL,
  `productLine` varchar(255) NOT NULL,
  `productName` varchar(255) NOT NULL,
  `description` varchar(255) DEFAULT NULL,
  `buyPrice` decimal(10,0) NOT NULL,
  `quantityInStock` int NOT NULL,
  `warrantyExpire` date NOT NULL,
  `importDate` date NOT NULL,
  PRIMARY KEY (`productID`),
  KEY `productLine` (`productLine`),
  CONSTRAINT `products_ibfk_1` FOREIGN KEY (`productLine`) REFERENCES `productlines` (`productLine`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `products`
--

LOCK TABLES `products` WRITE;
/*!40000 ALTER TABLE `products` DISABLE KEYS */;
INSERT INTO `products` VALUES ('AQ7','Audi','Audi Q7','Mid-size luxury crossover SUV, Audi\'s flagship SUV globally.',59200,20,'2025-06-12','2022-01-23'),('AR8','Audi','Audi R8','Mid-engine, rear-wheel/all-wheel drive sports car.',142700,5,'2024-06-12','2021-06-25'),('ATT','Audi','Audi TT','Front-engine, front-wheel/all-wheel drive four-seater (coupe) and two-seater (cabriolet) sports car.',50000,15,'2023-01-08','2020-08-23'),('B4','BMW','BMW Z4','Two-seat roadster part of the Z line of sports cars',63700,12,'2023-10-26','2020-05-05'),('B7','BMW','BMW i7','F-segment/full-size electric luxury sedan.',119300,8,'2024-06-25','2022-04-29'),('BX','BMW','BMW iX','E-segment/mid-size electric crossover SUV.',108900,10,'2030-05-29','2021-05-18'),('F1','Ferrari','Ferrari F1','Luxury sports 4-Door Coupé',139000,15,'2026-05-29','2021-08-23'),('FGTB','Ferrari','Ferrari 296 GTB','Sports coupé / Hard-top convertible',219000,3,'2029-08-23','2022-01-01'),('MAMG','Mercedes','Mercedes AMG','Luxury sports 4-Door Coupé',139000,15,'2026-05-29','2021-08-23'),('MG','Mercedes','Mercedes G-Class','Luxury off-road vehicle',119000,30,'2027-12-29','2022-06-12'),('MS','Mercedes','Mercedes S-Class','Full-Size luxury Sedan/Saloon, Coupé and Cabriolet',199000,17,'2026-11-17','2021-09-17');
/*!40000 ALTER TABLE `products` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `request_account`
--

DROP TABLE IF EXISTS `request_account`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `request_account` (
  `username` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `role` varchar(255) NOT NULL,
  PRIMARY KEY (`username`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `request_account`
--

LOCK TABLES `request_account` WRITE;
/*!40000 ALTER TABLE `request_account` DISABLE KEYS */;
INSERT INTO `request_account` VALUES ('fac1','fac1@gmail.com','$2a$08$qYBQMZJNMvtonucRlKZSwOhVeTY4/UKnkqOwTtRA3lGSR.6Cx5QPa','factory'),('factory','factory@factory.com','$2a$08$J3tbxJwTWiZtNQsYCv3F9e1sfHbSwtGmlz6PL9Wjqa/9SBrwDfx6y','factory'),('servicecenter','servicecenter@servicecenter.com','$2a$08$IupyhRN03mgGXH4VVFQQDuLgC.XB1OQuMAdPMqGF135Ps0nPuCMvy','servicecenter'),('store','store@store.com','$2a$08$z4pN6guCDepc0nOvZ/tO5O/rsy2pT/6EbKf6rPR5PLDlYsw6nJ9tW','store');
/*!40000 ALTER TABLE `request_account` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `send_to_servicecenter`
--

DROP TABLE IF EXISTS `send_to_servicecenter`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `send_to_servicecenter` (
  `id` int NOT NULL AUTO_INCREMENT,
  `storeID` varchar(255) NOT NULL,
  `servicecenterID` varchar(255) NOT NULL,
  `customerID` varchar(255) NOT NULL,
  `time` date NOT NULL,
  PRIMARY KEY (`id`),
  KEY `storeID` (`storeID`),
  KEY `servicecenterID` (`servicecenterID`),
  KEY `customerID` (`customerID`),
  CONSTRAINT `send_to_servicecenter_ibfk_1` FOREIGN KEY (`storeID`) REFERENCES `stores` (`storeID`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `send_to_servicecenter_ibfk_2` FOREIGN KEY (`servicecenterID`) REFERENCES `servicecenters` (`servicecenterID`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `send_to_servicecenter_ibfk_3` FOREIGN KEY (`customerID`) REFERENCES `customers` (`customerID`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `send_to_servicecenter`
--

LOCK TABLES `send_to_servicecenter` WRITE;
/*!40000 ALTER TABLE `send_to_servicecenter` DISABLE KEYS */;
INSERT INTO `send_to_servicecenter` VALUES (2,'BTL1','DD','1','2022-12-29'),(3,'TX1','DD','1','2022-12-29');
/*!40000 ALTER TABLE `send_to_servicecenter` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `servicecenters`
--

DROP TABLE IF EXISTS `servicecenters`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `servicecenters` (
  `servicecenterID` varchar(255) NOT NULL,
  `address` varchar(255) NOT NULL,
  PRIMARY KEY (`servicecenterID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `servicecenters`
--

LOCK TABLES `servicecenters` WRITE;
/*!40000 ALTER TABLE `servicecenters` DISABLE KEYS */;
INSERT INTO `servicecenters` VALUES ('BD','Ba Đình'),('DD','Đống Đa'),('HK','Hoàn Kiếm'),('LB','Long Biên'),('TH','Tây Hồ');
/*!40000 ALTER TABLE `servicecenters` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `store_warehouse`
--

DROP TABLE IF EXISTS `store_warehouse`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `store_warehouse` (
  `storeWarehouseID` varchar(255) NOT NULL,
  `address` varchar(255) NOT NULL,
  PRIMARY KEY (`storeWarehouseID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `store_warehouse`
--

LOCK TABLES `store_warehouse` WRITE;
/*!40000 ALTER TABLE `store_warehouse` DISABLE KEYS */;
INSERT INTO `store_warehouse` VALUES ('BD1','Ba Dinh'),('DD1','Dong Da'),('HK1','Hoan Kiem'),('LB1','Long Bien'),('NTL1','Nam Tu Liem'),('TH1','Tay Ho');
/*!40000 ALTER TABLE `store_warehouse` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `stores`
--

DROP TABLE IF EXISTS `stores`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `stores` (
  `storeID` varchar(255) NOT NULL,
  `factoryID` varchar(255) NOT NULL,
  `address` varchar(255) NOT NULL,
  PRIMARY KEY (`storeID`),
  KEY `factoryID` (`factoryID`),
  CONSTRAINT `stores_ibfk_1` FOREIGN KEY (`factoryID`) REFERENCES `factories` (`factoryID`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `stores`
--

LOCK TABLES `stores` WRITE;
/*!40000 ALTER TABLE `stores` DISABLE KEYS */;
INSERT INTO `stores` VALUES ('BTL1','BTL','Bắc Từ Liêm'),('BTL2','BTL','Bắc Từ Liêm'),('BTL3','BTL','Bắc Từ Liêm'),('HD1','HD','Hà Đông'),('HD2','HD','Hà Đông'),('TX1','TX','Thanh Xuân'),('TX2','TX','Thanh Xuân');
/*!40000 ALTER TABLE `stores` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `transactions`
--

DROP TABLE IF EXISTS `transactions`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `transactions` (
  `id` int NOT NULL AUTO_INCREMENT,
  `source` varchar(255) NOT NULL,
  `destination` varchar(255) NOT NULL,
  `sent` varchar(255) NOT NULL,
  `received` varchar(255) NOT NULL,
  `action` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=17 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `transactions`
--

LOCK TABLES `transactions` WRITE;
/*!40000 ALTER TABLE `transactions` DISABLE KEYS */;
INSERT INTO `transactions` VALUES (5,'BTL','DD','Sent','Received','Export to warehouse'),(7,'DD','BTL1','Sent','Received','Export to store'),(8,'DC','TX1','Sent','Received','Export to store'),(9,'TX','DC','Sent','Received','Export to warehouse'),(10,'BTL1','BD1','Sent','Received','Export to store\'s warehouse'),(11,'BTL1','DD','Sent','Received','Send to service center for warranty'),(12,'BTL1','BTL1','Sent','Not received','Export to warehouse'),(13,'BTL','DD','Sent','Received','Export to warehouse'),(14,'DC','TX1','Sent','Received','Export to store'),(15,'BTL1','NTL1','Sent','Received','Export to store\'s warehouse'),(16,'TX1','DD','Sent','Received','Send to service center for warranty');
/*!40000 ALTER TABLE `transactions` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `warehouse`
--

DROP TABLE IF EXISTS `warehouse`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `warehouse` (
  `warehouseID` varchar(255) NOT NULL,
  `address` varchar(255) NOT NULL,
  PRIMARY KEY (`warehouseID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `warehouse`
--

LOCK TABLES `warehouse` WRITE;
/*!40000 ALTER TABLE `warehouse` DISABLE KEYS */;
INSERT INTO `warehouse` VALUES ('DC','Đại Cát'),('DD','Đống Đa'),('DN','Đông Ngạc'),('HL','Hoàng Liên'),('TD','Thượng Đình'),('TXT','Thanh Xuân Trung'),('VK','Văn Khê'),('VP','Vạn Phúc'),('YN','Yên Nghĩa');
/*!40000 ALTER TABLE `warehouse` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `warranty`
--

DROP TABLE IF EXISTS `warranty`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `warranty` (
  `id` int NOT NULL AUTO_INCREMENT,
  `storeID` varchar(255) NOT NULL,
  `servicecenterID` varchar(255) NOT NULL,
  `customerID` varchar(255) NOT NULL,
  `warrantyStatus` varchar(255) NOT NULL,
  `date` date NOT NULL,
  PRIMARY KEY (`id`),
  KEY `storeID` (`storeID`),
  KEY `servicecenterID` (`servicecenterID`),
  KEY `customerID` (`customerID`),
  CONSTRAINT `warranty_ibfk_1` FOREIGN KEY (`storeID`) REFERENCES `stores` (`storeID`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `warranty_ibfk_2` FOREIGN KEY (`servicecenterID`) REFERENCES `servicecenters` (`servicecenterID`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `warranty_ibfk_3` FOREIGN KEY (`customerID`) REFERENCES `customers` (`customerID`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=17 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `warranty`
--

LOCK TABLES `warranty` WRITE;
/*!40000 ALTER TABLE `warranty` DISABLE KEYS */;
INSERT INTO `warranty` VALUES (1,'BTL1','BD','1','Return to factory','2022-12-20'),(2,'TX1','DD','2','Fixing','2022-04-12'),(3,'TX1','HK','3','Done','2022-09-12'),(4,'TX1','LB','4','Return to factory','2022-01-01'),(6,'BTL1','BD','6','Done','2022-12-29'),(7,'HD1','TH','7','Return to factory','2021-12-31'),(8,'BTL1','HK','8','Fixing','2022-07-18'),(9,'HD1','LB','9','Return to factory','2022-12-06'),(10,'HD1','DD','10','Done','2022-10-30'),(11,'TX1','LB','11','Done','2022-05-29'),(12,'TX1','DD','12','Return to factory','2021-08-16'),(13,'TX1','LB','13','Fixing','2022-02-02');
/*!40000 ALTER TABLE `warranty` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-12-31  0:34:36
