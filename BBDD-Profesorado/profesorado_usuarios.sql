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
  `email` varchar(45) COLLATE utf8mb3_bin NOT NULL,
  `contraseña` varchar(150) COLLATE utf8mb3_bin DEFAULT NULL,
  `idTipoUsuario` int DEFAULT NULL,
  `estado` tinyint DEFAULT '1',
  `dni` varchar(45) COLLATE utf8mb3_bin NOT NULL,
  PRIMARY KEY (`idUsuario`,`dni`),
  UNIQUE KEY `idUsuario_UNIQUE` (`idUsuario`),
  UNIQUE KEY `email_UNIQUE` (`email`),
  UNIQUE KEY `dni_UNIQUE` (`dni`)
) ENGINE=InnoDB AUTO_INCREMENT=66 DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_bin;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `usuarios`
--

LOCK TABLES `usuarios` WRITE;
/*!40000 ALTER TABLE `usuarios` DISABLE KEYS */;
INSERT INTO `usuarios` VALUES (3,'BennieTrantow@gmail.com','$2a$10$u50Un6ThB4VxWPNhjgcIzO4LEDCDJxux7qpkMeqH.7r261zhKGjYO',1,0,'09704337'),(4,'JanetGutkowski@gmail.com','$2a$10$prbJL7AEdqcAQmW0/v3wn.qqGqRxY6t0anHF4idcV434kSdoW5pNS',1,0,'90026407'),(5,'ClaytonRodriguez@gmail.com','$2a$10$OAnCJsFSMF7Nk8KQp1FSmeFAXuIFEIDpQfZFqU5UAnPbj5YuCQYL.',1,1,'52907172'),(6,'LorenaDaniel@gmail.com','$2a$10$jNHhTcQmjQ3U9U9Zg51YLuim1wTclUfyW..2JlYHO0tw4/0KgDpEW',1,1,'88675561'),(7,'ShaneCole@gmail.com','$2a$10$kRjt81saNq3BScIADA6sTehqNacdkLGG74/VEzuJysdLrWevVvp/e',1,1,'81875022'),(8,'CandiceBailey@gmail.com','$2a$10$kUPaLA9rZ7/Qz/1IfAmRM.68HRG5E1Rt/07NrgCjml1SDPa9MfbuO',1,1,'65373359'),(9,'SherriArmstrong@gmail.com','$2a$10$LdWopIrzFFqoqTJkCOBYWOxt32FJSabkYODor/csSP.KZiIA0.WtC',1,1,'36895266'),(10,'DarylStark@gmail.com','$2a$10$nqGA8ap/5aSAjgTsAD3CyufJePKwX0YbxRXNJ4BeFBdEHJrY6qHny',1,1,'08107150'),(11,'TerryShanahan@gmail.com','$2a$10$Ohkz0cB7IX40unVSeMKnS..Z.78Hh0sUw9GHPg/bqQy6aac/GiY6S',1,1,'93950350'),(12,'HannahKatherine@gmail.com','$2a$10$p034g.Gp4NqaaZoEeXVRqu731d8SrsppQ94njM17/g8vJ5NUBVLNa',1,1,'29417067'),(13,'MayKeebler@gmail.com','$2a$10$YP2mivr.Pu6EWGDzvo3Jr.nX2NYASKvG7Dlfa1goAlN.Pafwz3jxK',1,1,'28285451'),(14,'AndreJones@gmail.com','$2a$10$1Gzu5/yOfY6Mmpfcr4nPSuSYad7ng9D7TwtsnO5A2fFXlLZrYEt4a',1,1,'77636990'),(15,'BerthaMohr@gmail.com','$2a$10$o7YCbnhyFSfyavhnH39bdOkWi10EowVc6DNbEOb4dSVEnDSbbXD7K',1,1,'17081138'),(16,'Ms.Jean@gmail.com','$2a$10$rMHZbmLHm7aYxns/.7zgb.KuPVEF7EJ1EllXeI4SpoElXLWO4qTDC',1,1,'09822337'),(17,'Mr.Corkery@gmail.com','$2a$10$Z.0T1MfP69Jfb5r81JoRMOF79vTeDjHOByw78UFQQoTocQtCptWBW',1,1,'27248478'),(18,'Dr.Kassulke@gmail.com','$2a$10$0NPc8uPhR2LVXRAeFbyPEOAXjM1dYf.Tqrm0bcbBfeWtySZV9PG4G',1,1,'19819506'),(19,'CaseyMoore@gmail.com','$2a$10$MPzBFEiPCFX9S4pjQUjYReGDOf/yiis9lz/GjIlrC1ZMoEan1zBgC',1,1,'93850100'),(20,'WayneMosciski@gmail.com','$2a$10$Uo8UOgK8AFqJxieMm2Man.UdFr1A57K.2W3AuKSLp/lwmNFChKguy',1,1,'87913733'),(21,'JoannWolff@gmail.com','$2a$10$qwpt6cBLKBe5BdFG/J6aseIEves1dUSBtpx.QnHsocpB0DvPTxkAy',1,1,'12608427'),(22,'KellieMann@gmail.com','$2a$10$OU0rGtsfqBY2dQubsiPrDerb4oavg8IGRLYDHCUgcz1U/CLbJPYpS',1,1,'24415840'),(23,'SeanMcKenzie@gmail.com','$2a$10$F..6JmZEHDRoFukQ0H4V9.r66Iuk5DjyzUt.Ji1JLRE3rqKk4o1va',1,1,'22714373'),(24,'EarlHirthe@gmail.com','$2a$10$KQFYQ/YrzqtGxegr5YoE0e0HCPb9.wEFKa2V/RbuRrBI6C3LBJCsS',1,1,'16522000'),(25,'Mrs.Lehner@gmail.com','$2a$10$id2UaAT6ly7CLRTLCztyhOA3eHXoaH2qxoQHubH0IrDYkhSOo58w2',1,1,'92755937'),(26,'RomanKunde@gmail.com','$2a$10$V6GrD7P0tcI2/jHJDmqgWukY49cn9ahH9ofYeOfRXgcaDFvBLhrMi',1,1,'72624355'),(27,'LynnKirlin@gmail.com','$2a$10$khBqPunHDPdTx2ZZn4jDzO7h4Lkx5XaXhRrpOLKccbOQktH3BnwOa',1,1,'32876245'),(28,'SoniaLemke@gmail.com','$2a$10$5P/6ayyHhmu.dS7d7X/zG.YYnP9dF3/43bCWNVbCJaLrnRpU2fLIG',1,1,'23159678'),(29,'ArmandoMcLaughlin@gmail.com','$2a$10$abP83VXptlsA80OAuoQh/eAEo3ONR0.DOQixNIKY/MaOOo85eHqE6',1,1,'56148951'),(30,'Mr.Grady@gmail.com','$2a$10$LHtxuq45funcTbcRuUA2FOpaC.OD30qAaXnnZm.tXtYsWJeodHdVa',1,1,'14240086'),(33,'HoraceMurazik@gmail.com','$2a$10$7naPM3671N1qPuw46Pfk8O5Fn2rbrlOuUJxheH188Q2gFQf8NMXiy',2,1,'42886855'),(34,'MarthaSandra@gmail.com','$2a$10$sndU1JASogsj2kgELnrIKO1SPaxf7agkLDjAiix5vr9pwyYgCABvC',2,1,'89945724'),(35,'AdrianHuels@gmail.com','$2a$10$XSbc02DVC1.Fb2FtfEEaVOAk0GMWQlX9sr.0K3o5M0JGN6h/jEuGK',2,1,'06673711'),(36,'KathleenHodkiewicz@gmail.com','$2a$10$m.B1/F/7NBQODyqCVQ2M2ObKSWrXOKDLJO6SLKx.XTG4ebnTWpfYq',2,1,'64812863'),(37,'ToddDickens@gmail.com','$2a$10$Tth35K8IRqSEqd9NWVbuKuAmqXepDNUn3FTy9SISghTnlqJbA29Y.',2,1,'15886259'),(38,'EdwardDietrich@gmail.com','$2a$10$O1tu7nyz8H/uZ3XqhIDuQuogKPQ95QVv2l1d1diRl5FRa.f/jlSzS',2,1,'85026646'),(39,'LorenaBorer@gmail.com','$2a$10$vjLN7aqf5eedpFbPhZWte.6a9UcLWk7HS0p8WJYIJcsFT7ECNKZki',2,1,'50958864'),(40,'Mrs.Bernhard@gmail.com','$2a$10$tfCgQOroOVsOtPpSyMAfb.P0siTKA42DtyzXJPqXcH7ajDlssFh7S',2,1,'06030709'),(41,'JoshSporer@gmail.com','$2a$10$M3QHVkSs.846mWZ11TG8XeqS9Wl7xRtS3yfgL5rW0.ngSC6GYb9bC',2,1,'01044896'),(42,'LindaArmstrong@gmail.com','$2a$10$aQEHQn8tnsLPGpyScM3ArePmLcQFApI5SZLQSqyjubjH3fp.Yur9S',2,0,'34695606'),(43,'DianeParker@gmail.com','$2a$10$zYEHnrfOZxMaYSarX71a5eJYDF5hAwNodMaxoHFj8oA2TOHVtL15u',2,0,'95837751'),(44,'AnnEffertz@gmail.com','$2a$10$OMQat6Aduqc.LZwETPrDuebSg1G6IBl1VydIOvVFBIMbWscvbXEai',2,1,'89019425'),(45,'DeloresMcLaughlin@gmail.com','$2a$10$WOPIjQggVUnw7JFHLOSHLur.1mLNCMxN0v71k5od1N2Djk7Xqp.T.',2,1,'20529277'),(46,'EvaHeathcote@gmail.com','$2a$10$BoYFNtaXyhx/oCqZ6noOKOhGmeQuTGhWNfBSZq2QKZcX50A5Nar5S',2,1,'55300418'),(47,'SantiagoKoelpin@gmail.com','$2a$10$PnNWEBfujIX9/LgUIL.RCuso/uh55WI5COIUj7TFq9P7vaqT8msR2',2,1,'52488059'),(48,'CharliePat@gmail.com','$2a$10$XmBYsi1CtYOGCeHmnv3wo.VlmUeisTfkfyZa2MNrN9e8VEqOA9T12',2,1,'34572464'),(49,'TedKreiger@gmail.com','$2a$10$gD0VC03JIwqlQU3KJ38YZeIQ/UuNeHBQP9gPNe7JlXSc4OFx6DZju',2,1,'79830425'),(50,'PhyllisTurcotte@gmail.com','$2a$10$z8ZsY579aboIVJjzgdchOOYRj8tz6HXnv3n.B0tdy35F6tbl1UAUO',2,1,'11414497'),(51,'MissKlocko@gmail.com','$2a$10$9CBlYB6guvlZYtWxIIVsKeL21bMJlLXmRiblgeBXUVgqeQg73iUhS',2,1,'72899584'),(52,'JaimeProsacco@gmail.com','$2a$10$DPYOHRuuB9I.RppDu2ZDru/NBgwDBD7VASKPaBuz94Gbc5GB.C7lK',2,1,'51550018'),(53,'Mr.Davis@gmail.com','$2a$10$A.Xc4/5En8MKb3NASsTfkOmwFPzHa8i8gqg0nhKEBRPDcvySZAYoe',2,1,'06088392'),(54,'TamiKuhic@gmail.com','$2a$10$GOe69Im0eQXTykj6nt30a.gAi2cblARr6x3Ib8gtHb0t3XedCPdrG',2,1,'78850459'),(55,'SueBayer@gmail.com','$2a$10$oRrFEjI5aFw8TyvdHqCVAOnSX2XorUBYiGR4yl6h4Za18CT0i85Bm',2,1,'63242930'),(56,'Ms.Hand@gmail.com','$2a$10$NhG2cPbNu7OFXCZcf0E5BuNzTVyj2fzocpgUZGP2NvknpbegX7M9u',2,1,'01180492'),(57,'AlanGibson@gmail.com','$2a$10$azQlG/bjXYgUF1trpxoxxOEGHO80n2BsRDdhg/nE1BoNNBURNlqMG',2,1,'32233596'),(58,'KeithDach@gmail.com','$2a$10$Vsl53MssVE8d1hyM8clhm.cTRaTv40GCPpaQNOXXDIEZL9jy8.iEK',2,1,'23488397'),(59,'VivianHeller@gmail.com','$2a$10$oxkzqH3WXFztM9anLSFOne6KHlTDICb9N4y5dg6deTdFPvKJ.kdIe',2,1,'21468499'),(60,'JoanKeeling@gmail.com','$2a$10$zk2cUu8l.mtYs/K5Dv.g2.PyvMuW5NgnrA0E.jPO4XnPU1fD7hjdu',2,1,'81114484'),(61,'LeslieGulgowski@gmail.com','$2a$10$mmoAT/02o5331EWCvu5VMuN0FjXDLdS.UtClgEHn6BwePbk0VsGx6',2,1,'79683389'),(62,'AnthonyStark@gmail.com','$2a$10$PQIgITggvNTWXPFiX.BSt.aYOVH8wmamENk9o2oV.PplndVAqJPZO',2,1,'22758083'),(63,'l.yomayel@gmail.com','12345',1,1,'42886854'),(65,'luciano.yomayel@gmail.com','$2a$10$hqTJaesAG/Tzfo5jxAwD3e4R0QgrCYLp1KPGg49ynXcMG5WDQ6Mfy',1,1,'21493437');
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

-- Dump completed on 2022-09-10 23:00:21
