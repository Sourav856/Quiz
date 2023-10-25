-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Oct 25, 2023 at 11:39 AM
-- Server version: 10.4.21-MariaDB
-- PHP Version: 8.0.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `registration`
--

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `Fname` varchar(30) NOT NULL,
  `Lname` varchar(30) NOT NULL,
  `email` varchar(30) NOT NULL,
  `password` int(30) NOT NULL,
  `Mobile` int(30) NOT NULL,
  `Gender` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`Fname`, `Lname`, `email`, `password`, `Mobile`, `Gender`) VALUES
('Sourav', 'Barik', 'souravr@gmail.com', 123456, 2147483647, 'male'),
('Sangeeta', 'dey', 'sangetta@gmail.com', 123456, 2147483647, 'female'),
('ram', 'dey', 'ram@gmail.com', 987654, 55555, 'male'),
('mohani', 'dey', 'mohanir@gmail.com', 456987, 987456555, 'female');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
