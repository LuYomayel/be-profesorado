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
-- Table structure for table `alumnos`
--

DROP TABLE IF EXISTS `alumnos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `alumnos` (
  `idAlumno` int NOT NULL AUTO_INCREMENT,
  `nombre` varchar(45) COLLATE utf8mb3_bin DEFAULT NULL,
  `apellido` varchar(45) COLLATE utf8mb3_bin DEFAULT NULL,
  `dni` varchar(45) COLLATE utf8mb3_bin DEFAULT NULL,
  `telefono` varchar(45) COLLATE utf8mb3_bin DEFAULT NULL,
  `direccion` varchar(45) COLLATE utf8mb3_bin DEFAULT NULL,
  `fechaNac` date DEFAULT NULL,
  PRIMARY KEY (`idAlumno`),
  UNIQUE KEY `idAlumno_UNIQUE` (`idAlumno`)
) ENGINE=InnoDB AUTO_INCREMENT=44 DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_bin;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `alumnos`
--

LOCK TABLES `alumnos` WRITE;
/*!40000 ALTER TABLE `alumnos` DISABLE KEYS */;
INSERT INTO `alumnos` VALUES (13,'Hola','Yomayel','03761645','1192294195','Apt. 631','1987-04-23'),(14,'Bennie','Trantow','09704337','1131269563','Apt. 582','1990-12-26'),(15,'Janet','Gutkowski','90026407','1139445547','Apt. 501','1976-12-25'),(16,'Clayton','Rodriguez','52907172','1100006356','Suite 634','1998-11-05'),(17,'Lorena','Daniel','88675561','1160797268','Suite 985','1991-03-09'),(18,'Shane','Cole','81875022','1149907488','Suite 943','1973-04-30'),(19,'Candice','Bailey','65373359','1114200547','Suite 165','1991-11-23'),(20,'Sherri','Armstrong','36895266','1173000666','Apt. 571','1976-08-13'),(21,'Daryl','Stark','08107150','1107941676','Suite 640','1974-05-31'),(22,'Terry','Shanahan','93950350','1115191432','Suite 227','1995-02-20'),(23,'Hannah','Katherine','29417067','1187573970','Suite 541','1982-06-06'),(24,'May','Keebler','28285451','1163791596','Suite 048','1994-02-09'),(25,'Andre','Jones','77636990','1114325836','Apt. 711','1993-03-25'),(26,'Bertha','Mohr','17081138','1122920114','Apt. 566','1989-12-20'),(27,'Ms.','Jean','09822337','1160218729','Apt. 264','1973-05-10'),(28,'Mr.','Corkery','27248478','1123811417','Apt. 073','1976-02-07'),(29,'Dr.','Kassulke','19819506','1156590777','Suite 792','1975-05-24'),(30,'Casey','Moore','93850100','1103843180','Apt. 181','1999-05-21'),(31,'Wayne','Mosciski','87913733','1105714958','Apt. 310','1979-02-27'),(32,'Joann','Wolff','12608427','1179667414','Apt. 693','1994-02-13'),(33,'Kellie','Mann','24415840','1195507627','Apt. 387','1975-05-29'),(34,'Sean','McKenzie','22714373','1168387924','Apt. 985','1992-03-23'),(35,'Earl','Hirthe','16522000','1126213888','Suite 992','1999-02-26'),(36,'Mrs.','Lehner','92755937','1162182252','Apt. 933','1991-07-19'),(37,'Roman','Kunde','72624355','1193332381','Suite 557','1988-12-19'),(38,'Lynn','Kirlin','32876245','1144944464','Suite 462','1998-03-26'),(39,'Sonia','Lemke','23159678','1180259973','Suite 416','1971-06-07'),(40,'Armando','McLaughlin','56148951','1142916520','Suite 927','1996-01-01'),(41,'Mr.','Grady','14240086','1153170857','Suite 219','1987-11-03'),(42,'Marty','Owen','48709792','1135362856','Suite 185','1984-06-01');
/*!40000 ALTER TABLE `alumnos` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-09-03 19:17:37
