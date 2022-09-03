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
-- Table structure for table `usuarios`
--

DROP TABLE IF EXISTS `usuarios`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `usuarios` (
  `idUsuario` int NOT NULL AUTO_INCREMENT,
  `email` varchar(45) COLLATE utf8mb3_bin DEFAULT NULL,
  `contraseña` varchar(45) COLLATE utf8mb3_bin DEFAULT NULL,
  `idTipoUsuario` int DEFAULT NULL,
  PRIMARY KEY (`idUsuario`),
  UNIQUE KEY `idUsuario_UNIQUE` (`idUsuario`)
) ENGINE=InnoDB AUTO_INCREMENT=63 DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_bin;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `usuarios`
--

LOCK TABLES `usuarios` WRITE;
/*!40000 ALTER TABLE `usuarios` DISABLE KEYS */;
INSERT INTO `usuarios` VALUES (2,'MandyKautzer@gmail.com','03761645',1),(3,'BennieTrantow@gmail.com','09704337',1),(4,'JanetGutkowski@gmail.com','90026407',1),(5,'ClaytonRodriguez@gmail.com','52907172',1),(6,'LorenaDaniel@gmail.com','88675561',1),(7,'ShaneCole@gmail.com','81875022',1),(8,'CandiceBailey@gmail.com','65373359',1),(9,'SherriArmstrong@gmail.com','36895266',1),(10,'DarylStark@gmail.com','08107150',1),(11,'TerryShanahan@gmail.com','93950350',1),(12,'HannahKatherine@gmail.com','29417067',1),(13,'MayKeebler@gmail.com','28285451',1),(14,'AndreJones@gmail.com','77636990',1),(15,'BerthaMohr@gmail.com','17081138',1),(16,'Ms.Jean@gmail.com','09822337',1),(17,'Mr.Corkery@gmail.com','27248478',1),(18,'Dr.Kassulke@gmail.com','19819506',1),(19,'CaseyMoore@gmail.com','93850100',1),(20,'WayneMosciski@gmail.com','87913733',1),(21,'JoannWolff@gmail.com','12608427',1),(22,'KellieMann@gmail.com','24415840',1),(23,'SeanMcKenzie@gmail.com','22714373',1),(24,'EarlHirthe@gmail.com','16522000',1),(25,'Mrs.Lehner@gmail.com','92755937',1),(26,'RomanKunde@gmail.com','72624355',1),(27,'LynnKirlin@gmail.com','32876245',1),(28,'SoniaLemke@gmail.com','23159678',1),(29,'ArmandoMcLaughlin@gmail.com','56148951',1),(30,'Mr.Grady@gmail.com','14240086',1),(31,'MartyOwen@gmail.com','48709792',1),(33,'HoraceMurazik@gmail.com','82247319',2),(34,'MarthaSandra@gmail.com','89945724',2),(35,'AdrianHuels@gmail.com','06673711',2),(36,'KathleenHodkiewicz@gmail.com','64812863',2),(37,'ToddDickens@gmail.com','15886259',2),(38,'EdwardDietrich@gmail.com','85026646',2),(39,'LorenaBorer@gmail.com','50958864',2),(40,'Mrs.Bernhard@gmail.com','06030709',2),(41,'JoshSporer@gmail.com','01044896',2),(42,'LindaArmstrong@gmail.com','34695606',2),(43,'DianeParker@gmail.com','95837751',2),(44,'AnnEffertz@gmail.com','89019425',2),(45,'DeloresMcLaughlin@gmail.com','20529277',2),(46,'EvaHeathcote@gmail.com','55300418',2),(47,'SantiagoKoelpin@gmail.com','52488059',2),(48,'CharliePat@gmail.com','34572464',2),(49,'TedKreiger@gmail.com','79830425',2),(50,'PhyllisTurcotte@gmail.com','11414497',2),(51,'MissKlocko@gmail.com','72899584',2),(52,'JaimeProsacco@gmail.com','51550018',2),(53,'Mr.Davis@gmail.com','06088392',2),(54,'TamiKuhic@gmail.com','78850459',2),(55,'SueBayer@gmail.com','63242930',2),(56,'Ms.Hand@gmail.com','01180492',2),(57,'AlanGibson@gmail.com','32233596',2),(58,'KeithDach@gmail.com','23488397',2),(59,'VivianHeller@gmail.com','21468499',2),(60,'JoanKeeling@gmail.com','81114484',2),(61,'LeslieGulgowski@gmail.com','79683389',2),(62,'AnthonyStark@gmail.com','22758083',2);
/*!40000 ALTER TABLE `usuarios` ENABLE KEYS */;
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
