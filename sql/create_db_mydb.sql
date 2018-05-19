-- MySQL Script generated by MySQL Workbench
-- This is a database for a Fishing Diary application
-- Last modifed 19.5.2018 by TeddyStudent

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='TRADITIONAL,ALLOW_INVALID_DATES';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `mydb` DEFAULT CHARACTER SET utf8 ;
USE `mydb` ;

-- -----------------------------------------------------
-- Table `mydb`.`tili`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `mydb`.`tili` ;

CREATE TABLE IF NOT EXISTS `mydb`.`tili` (
  `idtili` INT NOT NULL AUTO_INCREMENT,
  `etunimi` VARCHAR(45) NOT NULL,
  `sukunimi` VARCHAR(45) NOT NULL,
  `email` VARCHAR(255) NOT NULL,
-- removed 19.5.2018
--  `kayttajatunnus` VARCHAR(45) NOT NULL,
  `salasana` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`idtili`),
  UNIQUE INDEX `email_UNIQUE` (`email` ASC))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`kalareissu`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `mydb`.`kalareissu` ;

CREATE TABLE IF NOT EXISTS `mydb`.`kalareissu` (
  `idkalareissu` INT NOT NULL AUTO_INCREMENT,
  `pvm` DATE NOT NULL,
  `paikka` VARCHAR(45) NOT NULL,
  `Saa` VARCHAR(45),
  `tuuli_nopeus` INT,
  `tuuli_suunta` VARCHAR(45),
  `lampotila_ilma` INT,
  `lampotila_vesi` INT,
  `tili_idtili` INT NOT NULL,
  PRIMARY KEY (`idkalareissu`, `tili_idtili`),
  INDEX `fk_kalareissu_tili_idx` (`tili_idtili` ASC),
  CONSTRAINT `fk_kalareissu_tili`
    FOREIGN KEY (`tili_idtili`)
    REFERENCES `mydb`.`tili` (`idtili`)
    ON DELETE CASCADE
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`kalalajit`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `mydb`.`kalalajit` ;

CREATE TABLE IF NOT EXISTS `mydb`.`kalalajit` (
  `idkalalajit` INT NOT NULL AUTO_INCREMENT,
  `nimi` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`idkalalajit`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`vieheet`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `mydb`.`vieheet` ;

CREATE TABLE IF NOT EXISTS `mydb`.`vieheet` (
  `idvieheet` INT NOT NULL AUTO_INCREMENT,
  `nimi` VARCHAR(45) NOT NULL,
  `valmistaja` VARCHAR(45) NOT NULL,
  `tyyppi` VARCHAR(45) NOT NULL,
  `vari` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`idvieheet`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`saaliskala`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `mydb`.`saaliskala` ;

CREATE TABLE IF NOT EXISTS `mydb`.`saaliskala` (
  `idsaaliskalat` INT NOT NULL AUTO_INCREMENT,
  `pituus` INT NULL,
  `paino` INT NULL,
  `saantiaika` DATETIME NULL,
  `kalalajit_idkalalajit` INT NOT NULL,
  `vieheet_idvieheet` INT NOT NULL,
  `kalareissu_idkalareissu` INT NOT NULL,
  `kalareissu_tili_idtili` INT NOT NULL,
  PRIMARY KEY (`idsaaliskalat`, `kalareissu_idkalareissu`, `kalareissu_tili_idtili`),
  INDEX `fk_saaliskala_kalalajit1_idx` (`kalalajit_idkalalajit` ASC),
  INDEX `fk_saaliskala_vieheet1_idx` (`vieheet_idvieheet` ASC),
  INDEX `fk_saaliskala_kalareissu1_idx` (`kalareissu_idkalareissu` ASC, `kalareissu_tili_idtili` ASC),
  CONSTRAINT `fk_saaliskala_kalalajit1`
    FOREIGN KEY (`kalalajit_idkalalajit`)
    REFERENCES `mydb`.`kalalajit` (`idkalalajit`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_saaliskala_vieheet1`
    FOREIGN KEY (`vieheet_idvieheet`)
    REFERENCES `mydb`.`vieheet` (`idvieheet`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_saaliskala_kalareissu1`
    FOREIGN KEY (`kalareissu_idkalareissu` , `kalareissu_tili_idtili`)
    REFERENCES `mydb`.`kalareissu` (`idkalareissu` , `tili_idtili`)
    ON DELETE CASCADE
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
