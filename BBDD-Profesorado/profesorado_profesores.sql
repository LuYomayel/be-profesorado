-- MySQL dump 10.13  Distrib 8.0.30, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: profesorado
-- ------------------------------------------------------
-- Server version	8.0.30

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
-- Table structure for table `profesores`
--

DROP TABLE IF EXISTS `profesores`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `profesores` (
  `idProfesor` int NOT NULL AUTO_INCREMENT,
  `nombre` varchar(45) COLLATE utf8mb3_bin DEFAULT NULL,
  `apellido` varchar(45) COLLATE utf8mb3_bin DEFAULT NULL,
  `dni` varchar(45) COLLATE utf8mb3_bin DEFAULT NULL,
  `telefono` varchar(45) COLLATE utf8mb3_bin DEFAULT NULL,
  `direccion` varchar(45) COLLATE utf8mb3_bin DEFAULT NULL,
  `fechaNac` date DEFAULT NULL,
  PRIMARY KEY (`idProfesor`),
  UNIQUE KEY `idProfesor_UNIQUE` (`idProfesor`)
) ENGINE=InnoDB AUTO_INCREMENT=31 DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_bin;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `profesores`
--

LOCK TABLES `profesores` WRITE;
/*!40000 ALTER TABLE `profesores` DISABLE KEYS */;
INSERT INTO `profesores` VALUES (1,'Horace','Murazik','42886854','1177519665','Urquiza 3739','1972-08-01'),(2,'Martha','Sandra','89945724','1135906135','Suite 485','1999-01-13'),(3,'Adrian','Huels','06673711','1176406602','Apt. 881','1983-02-25'),(4,'Kathleen','Hodkiewicz','64812863','1191291801','Apt. 985','1990-09-06'),(5,'Todd','Dickens','15886259','1196226942','Apt. 478','1975-03-26'),(6,'Edward','Dietrich','85026646','1186880828','Suite 674','1995-08-12'),(7,'Lorena','Borer','50958864','1100013064','Suite 075','1991-11-07'),(8,'Mrs.','Bernhard','06030709','1199138584','Apt. 389','1989-12-28'),(9,'Josh','Sporer','01044896','1186680708','Suite 416','1982-07-31'),(10,'Linda','Armstrong','34695606','1125302003','Suite 330','1995-02-02'),(11,'Diane','Parker','95837751','1157888607','Suite 024','1989-09-03'),(12,'Ann','Effertz','89019425','1116974775','Apt. 182','1971-05-04'),(13,'Delores','McLaughlin','20529277','1152231896','Suite 401','1975-07-31'),(14,'Eva','Heathcote','55300418','1182476441','Suite 949','1980-02-09'),(15,'Santiago','Koelpin','52488059','1165147577','Apt. 711','1996-09-05'),(16,'Charlie','Pat','34572464','1118734233','Apt. 068','1985-09-02'),(17,'Ted','Kreiger','79830425','1140583480','Suite 006','1983-12-01'),(18,'Phyllis','Turcotte','11414497','1190755163','Apt. 414','1986-11-19'),(19,'Miss','Klocko','72899584','1171116874','Apt. 396','1986-05-29'),(20,'Jaime','Prosacco','51550018','1178258713','Suite 270','1983-01-25'),(21,'Mr.','Davis','06088392','1138800060','Suite 662','1988-02-22'),(22,'Tami','Kuhic','78850459','1147923513','Suite 270','1998-02-23'),(23,'Sue','Bayer','63242930','1168935307','Suite 222','1971-10-16'),(24,'Ms.','Hand','01180492','1157061153','Suite 093','1972-10-26'),(25,'Alan','Gibson','32233596','1172104056','Suite 886','1987-09-14'),(26,'Keith','Dach','23488397','1139915293','Apt. 429','1997-03-17'),(27,'Vivian','Heller','21468499','1137282839','Suite 340','1996-07-20'),(28,'Joan','Keeling','81114484','1109769164','Apt. 828','1986-10-09'),(29,'Leslie','Gulgowski','79683389','1118680995','Suite 540','1975-05-25'),(30,'Anthony','Stark','22758083','1178791318','Suite 119','1989-08-31');
/*!40000 ALTER TABLE `profesores` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-09-03 19:17:38
