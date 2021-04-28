create database mydata default character set utf8;
use mydata;
CREATE TABLE IF NOT EXISTS person (
  id int(11) NOT NULL AUTO_INCREMENT,
  cin int(11) NOT NULL ,
  nom varchar(40) NOT NULL,
  tel varchar(40) NOT NULL,
  PRIMARY KEY (id)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 ;
insert into person (cin,nom,tel) values (111,'ahmed','06555'),(111,'hachour','065888'),(111,'oukacha','06222');