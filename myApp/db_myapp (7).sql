-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Oct 18, 2021 at 08:56 AM
-- Server version: 10.4.21-MariaDB
-- PHP Version: 7.3.30

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `db_myapp`
--

-- --------------------------------------------------------

--
-- Table structure for table `animal`
--

CREATE TABLE `animal` (
  `anm_id` varchar(50) NOT NULL,
  `anm_name` varchar(100) NOT NULL,
  `anm_category` varchar(100) NOT NULL,
  `anm_age` varchar(50) NOT NULL,
  `anm_species` varchar(100) NOT NULL,
  `anm_special_features` varchar(100) NOT NULL,
  `anm_gender` varchar(100) NOT NULL,
  `anm_color` varchar(100) NOT NULL,
  `anm_favorite_food` varchar(100) NOT NULL,
  `anm_food_allergy` varchar(100) NOT NULL,
  `anm_character` varchar(100) NOT NULL,
  `anm_talent` varchar(100) NOT NULL,
  `anm_congenital_disease` varchar(100) NOT NULL,
  `anm_more` varchar(100) NOT NULL,
  `user_id` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `animal`
--

INSERT INTO `animal` (`anm_id`, `anm_name`, `anm_category`, `anm_age`, `anm_species`, `anm_special_features`, `anm_gender`, `anm_color`, `anm_favorite_food`, `anm_food_allergy`, `anm_character`, `anm_talent`, `anm_congenital_disease`, `anm_more`, `user_id`) VALUES
('1', 'ดาด้า', '1', '12', 'ไม่ทราบ', 'ตาสีฟ้า ', 'ชาย', 'น้ำตาล ขาว', 'ชอบปลา', 'ไม่มี', 'ร่าเริง ขี้เล่น', 'ขอมือได้', 'ไม่มี', 'ไม่มี', '2');

-- --------------------------------------------------------

--
-- Table structure for table `animal_deposit`
--

CREATE TABLE `animal_deposit` (
  `anm_id` int(50) NOT NULL,
  `anm_name` varchar(100) NOT NULL,
  `anm_category` varchar(100) NOT NULL,
  `anm_age` varchar(50) NOT NULL,
  `anm_species` varchar(100) NOT NULL,
  `anm_special_features` varchar(100) NOT NULL,
  `anm_gender` varchar(100) NOT NULL,
  `anm_color` varchar(100) NOT NULL,
  `anm_favorite_food` varchar(100) NOT NULL,
  `anm_food_allergy` varchar(100) NOT NULL,
  `anm_character` varchar(100) NOT NULL,
  `anm_talent` varchar(100) NOT NULL,
  `anm_congenital_disease` varchar(100) NOT NULL,
  `anm_more` varchar(100) NOT NULL,
  `anm_deposit_date` varchar(50) NOT NULL,
  `anm_Deposit_time` varchar(50) NOT NULL,
  `anm_pick_up_date` varchar(50) NOT NULL,
  `anm_pick_up_time` varchar(50) NOT NULL,
  `anm_day` varchar(50) NOT NULL,
  `user_id` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `animal_deposit`
--

INSERT INTO `animal_deposit` (`anm_id`, `anm_name`, `anm_category`, `anm_age`, `anm_species`, `anm_special_features`, `anm_gender`, `anm_color`, `anm_favorite_food`, `anm_food_allergy`, `anm_character`, `anm_talent`, `anm_congenital_disease`, `anm_more`, `anm_deposit_date`, `anm_Deposit_time`, `anm_pick_up_date`, `anm_pick_up_time`, `anm_day`, `user_id`) VALUES
(5, 'ดาด้า', '1', '11', 'ไม่ทราบ', 'ตาสีฟ้า ', 'ชาย', 'น้ำตาล ขาว', 'ชอบปลา', 'ไม่มี', 'ร่าเริง ขี้เล่น', 'ขอมือได้', 'ไม่มี', 'ไม่มี', '12', '10.00', '15', '10.00', '5', '2');

-- --------------------------------------------------------

--
-- Table structure for table `price`
--

CREATE TABLE `price` (
  `p_id` int(50) NOT NULL,
  `p_category` varchar(50) NOT NULL,
  `p_price` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `price`
--

INSERT INTO `price` (`p_id`, `p_category`, `p_price`) VALUES
(1, 'แมว', '150'),
(2, 'สุนัข', '350');

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `user_id` varchar(50) NOT NULL,
  `user_email` varchar(100) NOT NULL,
  `user_password` varchar(100) NOT NULL,
  `user_name` varchar(100) NOT NULL,
  `user_sname` varchar(100) NOT NULL,
  `user_birthday` varchar(100) NOT NULL,
  `user_address` varchar(100) NOT NULL,
  `user_phone` varchar(50) NOT NULL,
  `user_id_number` varchar(50) NOT NULL,
  `user_type` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`user_id`, `user_email`, `user_password`, `user_name`, `user_sname`, `user_birthday`, `user_address`, `user_phone`, `user_id_number`, `user_type`) VALUES
('1', 'areefin.123@gmail.com', '123456789', 'muhammad', 'uma', '12/09/2542', 'yala', '0987556356', '189665788005', 'admin'),
('2', 'areefin.064@gmail.com', '123456789', 'areefin', 'uma', '19/04/2543', 'pattani', '0954568753', '1949800148965', 'user'),
('3', 'areefin.095@gmail.com', '123456789', 'harman', 'nawae', '12/05/2542', 'yala', '0986647896', '189674558965', 'user');

-- --------------------------------------------------------

--
-- Table structure for table `wait`
--

CREATE TABLE `wait` (
  `anm_id` int(50) NOT NULL,
  `anm_name` varchar(100) NOT NULL,
  `anm_category` varchar(100) NOT NULL,
  `anm_age` varchar(50) NOT NULL,
  `anm_species` varchar(100) NOT NULL,
  `anm_special_features` varchar(100) NOT NULL,
  `anm_gender` varchar(100) NOT NULL,
  `anm_color` varchar(100) NOT NULL,
  `anm_favorite_food` varchar(100) NOT NULL,
  `anm_food_allergy` varchar(100) NOT NULL,
  `anm_character` varchar(100) NOT NULL,
  `anm_talent` varchar(100) NOT NULL,
  `anm_congenital_disease` varchar(100) NOT NULL,
  `anm_more` varchar(100) NOT NULL,
  `user_id` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `wait`
--

INSERT INTO `wait` (`anm_id`, `anm_name`, `anm_category`, `anm_age`, `anm_species`, `anm_special_features`, `anm_gender`, `anm_color`, `anm_favorite_food`, `anm_food_allergy`, `anm_character`, `anm_talent`, `anm_congenital_disease`, `anm_more`, `user_id`) VALUES
(1, 'ดาด้า', '1', '10', 'ไม่ทราบ', 'ตาสีฟ้า ', 'ชาย', 'น้ำตาล ขาว', 'ชอบปลา', 'ไม่มี', 'ร่าเริง ขี้เล่น', 'ขอมือได้', 'ไม่มี', 'ไม่มี', '2');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `animal`
--
ALTER TABLE `animal`
  ADD PRIMARY KEY (`anm_id`);

--
-- Indexes for table `animal_deposit`
--
ALTER TABLE `animal_deposit`
  ADD PRIMARY KEY (`anm_id`);

--
-- Indexes for table `price`
--
ALTER TABLE `price`
  ADD PRIMARY KEY (`p_id`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`user_id`);

--
-- Indexes for table `wait`
--
ALTER TABLE `wait`
  ADD PRIMARY KEY (`anm_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `animal_deposit`
--
ALTER TABLE `animal_deposit`
  MODIFY `anm_id` int(50) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT for table `price`
--
ALTER TABLE `price`
  MODIFY `p_id` int(50) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `wait`
--
ALTER TABLE `wait`
  MODIFY `anm_id` int(50) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
