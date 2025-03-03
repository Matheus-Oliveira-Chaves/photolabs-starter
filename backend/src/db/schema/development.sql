



INSERT INTO USER_ACCOUNT (ID, FULLNAME, USERNAME, PROFILE_URL)
VALUES 
  (1, 'John Doe', 'jdoe', 'profile-1.jpg'),
  (2, 'Alice Wonderland', 'awond', 'profile-2.jpg'),
  (3, 'Sita Dennis', 'sitad', 'profile-3.jpg'),
  (4, 'Sasha Mateo', 'matte', 'profile-4.jpg'),
  (5, 'Anita Austi', 'anita', 'profile-5.jpg'),
  (6, 'Lukas Souza', 'lsouza', 'profile-6.jpg'),
  (7, 'Jose Alejandro', 'josea', 'profile-7.jpg'),
  (8, 'Dwayne Jacob', 'jdwayne', 'profile-8.jpg'),
  (9, 'Allison Saeng', 'saeng', 'profile-9.jpg'),
  (10, 'Adrea Santos', 'santa', 'profile-10.jpg');

INSERT INTO TOPIC (ID, TITLE, SLUG)
VALUES 
  (1, 'People', 'people'),
  (2, 'Nature', 'nature'),
  (3, 'Travel', 'travel'),
  (4, 'Animals', 'animals'),
  (5, 'Fashion', 'fashion');

INSERT INTO PHOTO (ID, FULL_URL, REGULAR_URL, CITY, COUNTRY, USER_ID, TOPIC_ID)
VALUES 
  (1, 'Image-1-Full.jpeg', 'Image-1-Regular.jpeg', 'Montreal', 'Canada', 1, 1),
  (11, 'people-1-full.jpg', 'people-1-regular.jpg', 'Toronto', 'Canada', 1, 1),
  (12, 'people-2-full.jpg', 'people-2-regular.jpg', 'Vancouver', 'Canada', 2, 1),
  (13, 'people-3-full.jpg', 'people-3-regular.jpg', 'Calgary', 'Canada', 3, 1),
  (14, 'people-4-full.jpg', 'people-4-regular.jpg', 'Victoria', 'Canada', 4, 1),
  (15, 'people-5-full.jpg', 'people-5-regular.jpg', 'Ottawa', 'Canada', 5, 1),
  (16, 'people-6-full.jpg', 'people-6-regular.jpg', 'Montreal', 'Canada', 6, 1),
  (17, 'people-7-full.jpg', 'people-7-regular.jpg', 'Toronto', 'Canada', 7, 1),
  (18, 'people-8-full.jpg', 'people-8-regular.jpg', 'Vancouver', 'Canada', 8, 1),
  (19, 'people-9-full.jpg', 'people-9-regular.jpg', 'Calgary', 'Canada', 9, 1),
  (21, 'nature-1-full.jpg', 'nature-1-regular.jpg', 'Toronto', 'Canada', 1, 2),
  (22, 'nature-2-full.jpg', 'nature-2-regular.jpg', 'Vancouver', 'Canada', 2, 2),
  (23, 'nature-3-full.jpg', 'nature-3-regular.jpg', 'Calgary', 'Canada', 3, 2),
  (24, 'nature-4-full.jpg', 'nature-4-regular.jpg', 'Victoria', 'Canada', 4, 2),
  (25, 'nature-5-full.jpg', 'nature-5-regular.jpg', 'Ottawa', 'Canada', 5, 2),
  (26, 'nature-6-full.jpg', 'nature-6-regular.jpg', 'Montreal', 'Canada', 6, 2),
  (27, 'nature-7-full.jpg', 'nature-7-regular.jpg', 'Toronto', 'Canada', 7, 2),
  (28, 'nature-8-full.jpg', 'nature-8-regular.jpg', 'Vancouver', 'Canada', 8, 2),
  (29, 'nature-9-full.jpg', 'nature-9-regular.jpg', 'Calgary', 'Canada', 9, 2),
  (31, 'travel-1-full.jpg', 'travel-1-regular.jpg', 'Toronto', 'Canada', 1, 3),
  (32, 'travel-2-full.jpg', 'travel-2-regular.jpg', 'Vancouver', 'Canada', 2, 3),
  (33, 'travel-3-full.jpg', 'travel-3-regular.jpg', 'Calgary', 'Canada', 3, 3),
  (34, 'travel-4-full.jpg', 'travel-4-regular.jpg', 'Victoria', 'Canada', 4, 3),
  (35, 'travel-5-full.jpg', 'travel-5-regular.jpg', 'Ottawa', 'Canada', 5, 3),
  (36, 'travel-6-full.jpg', 'travel-6-regular.jpg', 'Montreal', 'Canada', 6, 3),
  (37, 'travel-7-full.jpg', 'travel-7-regular.jpg', 'Toronto', 'Canada', 7, 3),
  (38, 'travel-8-full.jpg', 'travel-8-regular.jpg', 'Vancouver', 'Canada', 8, 3),
  (41, 'animals-1-full.jpg', 'animals-1-regular.jpg', 'Toronto', 'Canada', 1, 4),
  (42, 'animals-2-full.jpg', 'animals-2-regular.jpg', 'Vancouver', 'Canada', 2, 4),
  (43, 'animals-3-full.jpg', 'animals-3-regular.jpg', 'Calgary', 'Canada', 3, 4),
  (44, 'animals-4-full.jpg', 'animals-4-regular.jpg', 'Victoria', 'Canada', 4, 4),
  (45, 'animals-5-full.jpg', 'animals-5-regular.jpg', 'Ottawa', 'Canada', 5, 4),
  (46, 'animals-6-full.jpg', 'animals-6-regular.jpg', 'Montreal', 'Canada', 6, 4),
  (47, 'animals-7-full.jpg', 'animals-7-regular.jpg', 'Toronto', 'Canada', 7, 4),
  (48, 'animals-8-full.jpg', 'animals-8-regular.jpg', 'Vancouver', 'Canada', 8, 4),
  (49, 'animals-9-full.jpg', 'animals-9-regular.jpg', 'Calgary', 'Canada', 9, 4),
  (51, 'fashion-1-full.jpg', 'fashion-1-regular.jpg', 'Toronto', 'Canada', 1, 5),
  (52, 'fashion-2-full.jpg', 'fashion-2-regular.jpg', 'Vancouver', 'Canada', 2, 5),
  (53, 'fashion-3-full.jpg', 'fashion-3-regular.jpg', 'Calgary', 'Canada', 3, 5),
  (54, 'fashion-4-full.jpg', 'fashion-4-regular.jpg', 'Victoria', 'Canada', 4, 5),
  (55, 'fashion-5-full.jpg', 'fashion-5-regular.jpg', 'Ottawa', 'Canada', 5, 5),
  (56, 'fashion-6-full.jpg', 'fashion-6-regular.jpg', 'Montreal', 'Canada', 6, 5),
  (57, 'fashion-7-full.jpg', 'fashion-7-regular.jpg', 'Toronto', 'Canada', 7, 5),
  (58, 'fashion-8-full.jpg', 'fashion-8-regular.jpg', 'Vancouver', 'Canada', 8, 5),
  (59, 'fashion-9-full.jpg', 'fashion-9-regular.jpg', 'Calgary', 'Canada', 9, 5);