/* User population */
insert into Users (user_id, first_name, last_name, email, password, role) values ('f96b2138-1754-4c17-a405-940e20adc601', 'Wayne', 'Lee', 'admin@gmail.com', $1, 'admin');
insert into Users (user_id, first_name, last_name, email, password, role) values ('b7662cd1-a2c9-4054-95e7-078e35ea6fa1', 'Derrick', 'Lim', 'derrick@gmail.com', $1, 'admin');
insert into Users (user_id, first_name, last_name, email, password, role) values ('d69a127d-815b-4834-b2b6-54ab398fccad', 'Aaron', 'Lim', 'user@gmail.com', $1, 'user');
insert into Users (user_id, first_name, last_name, email, password, role) values ('f997120c-2956-482e-9ba3-81a12b4fecc1', 'Viki', 'Tay', 'valbrooke3@businessinsider.com', $1, 'user');
insert into Users (user_id, first_name, last_name, email, password, role) values ('2e9c26a0-7c1c-49d1-8c78-3a0545ca22eb', 'Constance', 'Tan', 'cstan4@toplist.cz', $1, 'user');

/* User profile population */
insert into Profiles (user_id, nickname, profile_picture, about, gender, dob, interest, phone, facebook_link, twitter_link, instagram_link, linkedin_link) values ('f96b2138-1754-4c17-a405-940e20adc601', 'Wayne', 'https://images.pexels.com/photos/1561863/pexels-photo-1561863.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260', 'Quality-focused impactful projection', 'o', '1985-04-18 00:43:59', 'Geological Engineer', 97690390, 'http://baidu.com/ipsum/primis/in/faucibus/orci/luctus.xml', 'http://nhs.uk/at/diam/nam.png', 'http://nasa.gov/pede/justo/eu/massa/donec/dapibus/duis.aspx', 'https://linkedin.com/ante/vestibulum/ante/ipsum/primis/in.json');
INSERT INTO "public"."profiles" ("user_id", "nickname", "profile_picture", "about", "gender", "dob", "interest", "phone", "facebook_link", "twitter_link", "instagram_link", "linkedin_link", "is_verified", "created_on") VALUES
('b7662cd1-a2c9-4054-95e7-078e35ea6fa1', 'Derrick', 'https://images.pexels.com/photos/2434268/pexels-photo-2434268.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260', 'KFC is an American fast food restaurant chain headquartered in Louisville, Kentucky, that specializes in fried chicken. It is the world''s second-largest restaurant chain after McDonald''s, with 22,621 locations globally in 150 countries as of December 2019. The chain is a subsidiary of Yum', 'm', '1990-05-07 15:40:00', 'KFC Expert', '96831702', 'https://jigsy.com/eu/interdum/eu/tincidunt/in.html', 'http://nasa.gov/nisi/at/nibh/in/hac/habitasse.png', 'https://360.cn/sed/nisl/nunc/rhoncus/dui/vel.jpg', 'https://cbc.ca/id/luctus/nec/molestie/sed/justo/pellentesque.png', 'f', '2020-08-20 17:36:45.815638');
insert into Profiles (user_id, nickname, profile_picture, about, gender, dob, interest, phone, facebook_link, twitter_link, instagram_link, linkedin_link) values ('d69a127d-815b-4834-b2b6-54ab398fccad', 'Aaron', 'https://images.pexels.com/photos/1368347/pexels-photo-1368347.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260', 'Down-sized disintermediate circuit', 'f', '2003-09-22 08:32:55', 'Statistician IV', 87685829, 'https://tripadvisor.com/ornare/imperdiet.png', 'https://google.com/quis/orci/nullam/molestie/nibh/in/lectus.xml', 'http://1und1.de/in/libero/ut/massa.png', 'http://i2i.jp/imperdiet/sapien/urna/pretium/nisl/ut.jpg');
insert into Profiles (user_id, nickname, profile_picture, about, gender, dob, interest, phone, facebook_link, twitter_link, instagram_link, linkedin_link) values ('f997120c-2956-482e-9ba3-81a12b4fecc1', 'Viki Tay', 'https://images.pexels.com/photos/2426551/pexels-photo-2426551.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260', 'Face to face neutral conglomeration', 'u', '2000-07-04 19:07:24', 'VP Product Management', 84428699, 'https://nhs.uk/mauris.xml', 'http://uiuc.edu/sit/amet/consectetuer/adipiscing/elit/proin.aspx', 'http://cbsnews.com/elementum/eu/interdum.jsp', 'https://hibu.com/quam/sapien/varius/ut/blandit/non/interdum.html');
insert into Profiles (user_id, nickname, profile_picture, about, gender, dob, interest, phone, facebook_link, twitter_link, instagram_link, linkedin_link) values ('2e9c26a0-7c1c-49d1-8c78-3a0545ca22eb', 'Constance Tan', 'https://images.pexels.com/photos/2426656/pexels-photo-2426656.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260', 'Front-line non-volatile conglomeration', 'o', '1996-04-04 20:05:06', 'Software Engineer II', 84677316, 'http://51.la/dui/maecenas/tristique/est.json', 'https://mozilla.com/sagittis.jsp', 'http://vk.com/cubilia.html', 'https://bravesites.com/ut/mauris/eget/massa.jpg');

/* Listings population */
INSERT INTO "public"."listings" ("listing_id", "organisation_id", "created_by", "title", "category", "about", "tagline", "mission", "listing_url", "pic1", "pic2", "pic3", "pic4", "pic5", "is_published", "is_verified", "start_date", "end_date", "created_on", "deleted_on") VALUES
('1276b4eb-df3a-4de3-bcae-a450ed96eeac', NULL, 'b7662cd1-a2c9-4054-95e7-078e35ea6fa1', 'Project Kampong', 'Technology', NULL, 'With Kampong you can', 'To build a platform that connects people with ideas and skills to build and track social good project initiatives', 'www.test.com', 'https://kampong-dev.s3.ap-southeast-1.amazonaws.com/kampong%20logo-1597985636566.jpeg', 'https://kampong-dev.s3.ap-southeast-1.amazonaws.com/group-large-1597985817857.png', NULL, NULL, NULL, 'f', 'f', '2020-08-21 04:50:15.047753', NULL, '2020-08-21 04:50:15.047753', NULL),
('43824166-bee2-426e-8a08-ca2c4e4120ae', NULL, 'f96b2138-1754-4c17-a405-940e20adc601', 'Rebuilding Homes', 'Community', 'Customer-focused dynamic installation', 'Building Better Lives', 'Sharing compassion', 'http://ifeng.com/nisl.jsp', 'https://images.pexels.com/photos/2219024/pexels-photo-2219024.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260', 'https://robohash.org/ipsaiuresed.bmp?size=500x500&set=set1', 'https://robohash.org/animiautvoluptas.jpg?size=500x500&set=set1', 'https://robohash.org/fugaidconsequatur.png?size=500x500&set=set1', NULL, 'f', 'f', '2020-12-01 19:09:20', NULL, '2020-08-20 17:36:45.815638', NULL),
('c975a572-452d-4824-8ed5-500b50488436', NULL, 'b7662cd1-a2c9-4054-95e7-078e35ea6fa1', 'CommStart 2020', 'Enterprise', 'Team-oriented context-sensitive forecast', 'Innovating Ideas, Creating Opportunities', 'Cultivating entrepreneurship and community impact', 'https://ehow.com/in/imperdiet/et/commodo/vulputate/justo.xml', 'https://images.pexels.com/photos/3637796/pexels-photo-3637796.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260', NULL, NULL, NULL, NULL, 'f', 'f', '2020-07-30 13:54:45', NULL, '2020-08-20 17:36:45.815638', NULL),
('cf4adc93-3b96-4bbc-8cb0-41e196b145ac', NULL, 'f997120c-2956-482e-9ba3-81a12b4fecc1', 'YOUTH Mentorship Programme', 'Youth', 'Cloned 4th generation matrices', 'Paving the way for the future generations', 'Strengthening bonds', 'https://toplist.cz/aliquam.xml', 'https://images.pexels.com/photos/754769/pexels-photo-754769.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260', 'https://robohash.org/utsednostrum.png?size=500x500&set=set1', NULL, 'https://robohash.org/laudantiumconsequatursequi.png?size=500x500&set=set1', NULL, 'f', 'f', '2020-12-25 22:21:11', NULL, '2020-08-20 17:36:45.815638', NULL),
('d95a6c2e-3c33-447c-be0c-be399247dd3f', NULL, 'd69a127d-815b-4834-b2b6-54ab398fccad', 'Supporting COVID-19 Efforts', 'COVID-19', 'Triple-buffered client-server installation', 'Emerge stronger together', 'streamline web-enabled ROI', 'https://mtv.com/blandit/mi/in.png', 'https://images.pexels.com/photos/127873/pexels-photo-127873.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260', NULL, 'https://robohash.org/auteligendimagnam.bmp?size=500x500&set=set1', NULL, NULL, 'f', 'f', '2020-01-01 20:54:13', NULL, '2020-08-20 17:36:45.815638', NULL),
('e411bd80-d5cf-49ac-b847-18c9fc13377a', NULL, '2e9c26a0-7c1c-49d1-8c78-3a0545ca22eb', 'Project Donation Drive', 'Elderly Care', 'Adaptive disintermediate Graphical User Interface', 'Bridging communities', 'e-enable dot-com metrics', 'http://i2i.jp/rhoncus/dui/vel.jpg', 'https://images.pexels.com/photos/339620/pexels-photo-339620.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260', NULL, 'https://robohash.org/atquemolestiasvelit.jpg?size=500x500&set=set1', 'https://robohash.org/nonquodquam.png?size=500x500&set=set1', 'https://robohash.org/voluptaslaborumsimilique.png?size=500x500&set=set1', 'f', 'f', '2020-03-19 11:04:15', NULL, '2020-08-20 17:36:45.815638', NULL);

/* ListingStories with paragraphed text */
INSERT INTO "public"."listingstories" ("listing_id", "overview", "problem", "solution", "outcome") VALUES
('1276b4eb-df3a-4de3-bcae-a450ed96eeac', 'Formed in Sept 2019, a result of the Youth Action Challenge under the Ministry of Culture, Community, and Youth (MCCY), National Youth Council (NYC) and People''s Association Youth Movement (PAYM). PKG hopes to understand the existing gaps in the communication & information network systems which are utilized in the Social Sector in Singapore. 


Our platform seeks to serve as an integrative shared central platform starting by creating visibility on completed and ongoing social good activities/initiatives. The aim of PKG is to lower the barrier for stakeholders to collaborate and create sustainable projects with trackable impacts.
The current members of Project Kampong met each other at the YAC workshops hosted, ideated and formed Project Kampong.', 'Current providers include Volunteer.sg & Giving.sg. However, these platforms are not able to fully support the growth of initiatives but are instead a depository of resources to tap on for manpower and funds respectively. PKG would like to build capacity to meet the information visibility gap in the social sector. Being an aggregator or ecosystem builder is a growing trend with the likes of Trybe and A Good Space. However, the ecosystems in which these organizations have built are not available openly. 


The restriction of such information has resulted in a lack of benchmarking in efforts directed towards addressing social issues. There is uncertainty as to who and how is actively working towards solving that problem. The lack of visibility and communication results in similar initiatives being created and sometimes funded from the same source. 


The sooner this capacity is built, the sooner PKG will be able to engage the prospective users to efficiently start their own initiatives or find existing ones to join and contribute. 
PKG operates and develops in a series of sprints whereby in each sprint, a new feature will be rolled out, tested and deployed.', 'Project Kampong is an online platform aggregator for youths to connect, collaborate and create social good initiatives for the benefit of their respective communities.
Through skills and idea matching and intuitive progress tracking, we aim to be an online platform that collates and promotes collaboration.

As part of the Singapore''s TogetherSG movement, having a shared central network system is crucial towards the aim of community development. Collaborative systems and Visibility are key areas in which focus, and resources should be poured into. Having an asset mapping tool is essential towards any initiatives or goals served by platforms like Project Kampong.', 'Youths today are becoming increasingly engaged in social issues. However, when trying to kick start their ideas, they often bump into a couple of problems: the lack of connection with people with the right skills, the resources to expand the ideas, or a platform to commit to. Youths that do start their ideas also face issues with project sustainability, such as making sure their ideas continue to deliver impact and staying afloat in the long run.'),
('43824166-bee2-426e-8a08-ca2c4e4120ae', NULL, NULL, NULL, NULL),
('c975a572-452d-4824-8ed5-500b50488436', 'Up-sized hybrid moratorium', 'Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.', 'Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.', 'nam nulla integer pede justo lacinia eget tincidunt eget tempus vel pede morbi porttitor lorem id ligula suspendisse'),
('cf4adc93-3b96-4bbc-8cb0-41e196b145ac', 'Switchable neutral Graphic Interface', 'Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.', 'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros. Vestibulum ac est lacinia nisi venenatis tristique.', 'pellentesque quisque porta volutpat erat quisque erat eros viverra eget congue eget semper rutrum nulla nunc'),
('d95a6c2e-3c33-447c-be0c-be399247dd3f', NULL, NULL, NULL, NULL),
('e411bd80-d5cf-49ac-b847-18c9fc13377a', 'Integrated fresh-thinking parallelism', 'Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.', 'Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus. Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci.', 'neque aenean auctor gravida sem praesent id massa id nisl venenatis lacinia aenean sit amet justo');

/* Skills mock data population */
INSERT INTO "public"."skills" ("skill", "skill_group") VALUES
('Needs Analysis', 'Big Data Analysis'),
('Quantitative Research', 'Big Data Analysis'),
('Statistical Analysis', 'Big Data Analysis'),
('Compiling Statistics', 'Big Data Analysis'),
('Database Management', 'Big Data Analysis'),
('Modeling', 'Big Data Analysis'),
('Data Analytics', 'Big Data Analysis'),
('Phone Applications', 'Coding and Programming'),
('Design UIUX', 'Coding and Programming'),
('Website Building', 'Coding and Programming'),
('Benchmarking', 'Project Management'),
('Budget Planning', 'Project Management'),
('Operations', 'Project Management'),
('Quality Assurance', 'Project Management'),
('Scheduling', 'Project Management'),
('Fund Raiser', 'Project Management'),
('Administrative', 'Project Management'),
('Microsoft Office Skills', 'Project Management'),
('Negotiations', 'Project Management'),
('Public Speaking', 'Project Management'),
('Content Management System', 'Social Media Experience'),
('Digital Marketing', 'Social Media Experience'),
('Networking', 'Social Media Experience'),
('Search Engine Optimisation', 'Social Media Experience'),
('Social Media Platforms', 'Social Media Experience'),
('Web Analytics', 'Social Media Experience'),
('Sales', 'Social Media Experience'),
('Automated Marketing Software', 'Social Media Experience'),
('Graphic Design', 'Social Media Experience'),
('Research', 'Writing'),
('Emails', 'Writing'),
('Client Relations', 'Writing'),
('Technical Documentation', 'Writing'),
('Requirements Gathering', 'Writing');


insert into ProfileSkills (user_id, skill_id) values ('f96b2138-1754-4c17-a405-940e20adc601', 1);
insert into ProfileSkills (user_id, skill_id) values ('f96b2138-1754-4c17-a405-940e20adc601', 2);
insert into ProfileSkills (user_id, skill_id) values ('f96b2138-1754-4c17-a405-940e20adc601', 3);
insert into ProfileSkills (user_id, skill_id) values ('b7662cd1-a2c9-4054-95e7-078e35ea6fa1', 4);
insert into ProfileSkills (user_id, skill_id) values ('b7662cd1-a2c9-4054-95e7-078e35ea6fa1', 5);
insert into ProfileSkills (user_id, skill_id) values ('d69a127d-815b-4834-b2b6-54ab398fccad', 6);
insert into ProfileSkills (user_id, skill_id) values ('f997120c-2956-482e-9ba3-81a12b4fecc1', 7);
insert into ProfileSkills (user_id, skill_id) values ('2e9c26a0-7c1c-49d1-8c78-3a0545ca22eb', 8);

INSERT INTO "public"."listingskills" ("listing_id", "skill_id") VALUES
('c975a572-452d-4824-8ed5-500b50488436', '15'),
('c975a572-452d-4824-8ed5-500b50488436', '16'),
('c975a572-452d-4824-8ed5-500b50488436', '17'),
('1276b4eb-df3a-4de3-bcae-a450ed96eeac', '15'),
('1276b4eb-df3a-4de3-bcae-a450ed96eeac', '16'),
('1276b4eb-df3a-4de3-bcae-a450ed96eeac', '17');

/* FAQ mock data population */
insert into Faqs (listing_id, question, answer) values ('43824166-bee2-426e-8a08-ca2c4e4120ae', 'consequat nulla nisl nunc nisl duis bibendum felis', '24/7');
insert into Faqs (listing_id, question, answer) values ('43824166-bee2-426e-8a08-ca2c4e4120ae', 'mus vivamus vestibulum sagittis sapien cum sociis natoque penatibus et magnis dis', 'Graphic Interface');
insert into Faqs (listing_id, question, answer) values ('43824166-bee2-426e-8a08-ca2c4e4120ae', 'mauris vulputate elementum nullam varius nulla facilisi cras', 'conglomeration');
insert into Faqs (listing_id, question, answer) values ('43824166-bee2-426e-8a08-ca2c4e4120ae', 'felis donec semper sapien a libero nam dui proin leo odio porttitor', 'Visionary');
insert into Faqs (listing_id, question, answer) values ('43824166-bee2-426e-8a08-ca2c4e4120ae', 'congue risus semper porta volutpat quam', 'logistical');
insert into Faqs (listing_id, question, answer) values ('c975a572-452d-4824-8ed5-500b50488436', 'vel est donec odio justo sollicitudin ut suscipit a', 'neutral');
insert into Faqs (listing_id, question, answer) values ('c975a572-452d-4824-8ed5-500b50488436', 'odio in hac habitasse platea dictumst maecenas ut massa quis augue', 'analyzer');
insert into Faqs (listing_id, question, answer) values ('c975a572-452d-4824-8ed5-500b50488436', 'sed sagittis nam congue risus semper porta volutpat quam pede lobortis ligula', '3rd generation');
insert into Faqs (listing_id, question, answer) values ('c975a572-452d-4824-8ed5-500b50488436', 'cras mi pede malesuada in imperdiet et commodo vulputate justo', 'internet solution');
insert into Faqs (listing_id, question, answer) values ('c975a572-452d-4824-8ed5-500b50488436', 'vestibulum vestibulum ante ipsum primis in faucibus orci luctus et ultrices', 'superstructure');
insert into Faqs (listing_id, question, answer) values ('c975a572-452d-4824-8ed5-500b50488436', 'sit amet consectetuer adipiscing elit proin interdum mauris non ligula pellentesque', 'Cloned');
insert into Faqs (listing_id, question, answer) values ('d95a6c2e-3c33-447c-be0c-be399247dd3f', 'turpis sed ante vivamus tortor duis mattis', 'Managed');
insert into Faqs (listing_id, question, answer) values ('d95a6c2e-3c33-447c-be0c-be399247dd3f', 'id sapien in sapien iaculis congue', 'Switchable');
insert into Faqs (listing_id, question, answer) values ('d95a6c2e-3c33-447c-be0c-be399247dd3f', 'ac enim in tempor turpis nec euismod scelerisque quam turpis', 'Fundamental');
insert into Faqs (listing_id, question, answer) values ('d95a6c2e-3c33-447c-be0c-be399247dd3f', 'cras non velit nec nisi vulputate nonummy', 'solution');
insert into Faqs (listing_id, question, answer) values ('cf4adc93-3b96-4bbc-8cb0-41e196b145ac', 'erat tortor sollicitudin mi sit amet lobortis sapien sapien non mi integer', 'Fully-configurable');
insert into Faqs (listing_id, question, answer) values ('cf4adc93-3b96-4bbc-8cb0-41e196b145ac', 'sagittis sapien cum sociis natoque penatibus et magnis dis', 'workforce');
insert into Faqs (listing_id, question, answer) values ('cf4adc93-3b96-4bbc-8cb0-41e196b145ac', 'nunc viverra dapibus nulla suscipit ligula in lacus', 'framework');
insert into Faqs (listing_id, question, answer) values ('e411bd80-d5cf-49ac-b847-18c9fc13377a', 'quam fringilla rhoncus mauris enim leo rhoncus sed vestibulum sit amet cursus', 'stable');
insert into Faqs (listing_id, question, answer) values ('e411bd80-d5cf-49ac-b847-18c9fc13377a', 'scelerisque quam turpis adipiscing lorem vitae mattis nibh ligula nec', 'User-friendly');
insert into Faqs (listing_id, question, answer) values ('e411bd80-d5cf-49ac-b847-18c9fc13377a', 'ullamcorper purus sit amet nulla quisque arcu libero rutrum ac lobortis', 'client-server');
INSERT INTO "public"."faqs" ("listing_id", "question", "answer") VALUES
('1276b4eb-df3a-4de3-bcae-a450ed96eeac', 'Who is behind Project Kampong?', 'Project Kampong is a youth-led platform dedicated to connecting young Singaporean leaders to build social good initiatives, together. By breaking down the barriers youths face in finding ideas and/or members, Project Kampong hopes to create a more level playing field that supports youth to innovate and  pursue their passions.');

/* Participants mock data population */
insert into Participants (listing_id, user_id, joined_on, end_on) values ('43824166-bee2-426e-8a08-ca2c4e4120ae', 'f96b2138-1754-4c17-a405-940e20adc601', '12/19/2018', null);
insert into Participants (listing_id, user_id, joined_on, end_on) values ('c975a572-452d-4824-8ed5-500b50488436', 'f96b2138-1754-4c17-a405-940e20adc601', '9/24/2018', null);
insert into Participants (listing_id, user_id, joined_on, end_on) values ('43824166-bee2-426e-8a08-ca2c4e4120ae', 'b7662cd1-a2c9-4054-95e7-078e35ea6fa1', '10/18/2019', null);
insert into Participants (listing_id, user_id, joined_on, end_on) values ('c975a572-452d-4824-8ed5-500b50488436', 'b7662cd1-a2c9-4054-95e7-078e35ea6fa1', '8/21/2018', '9/7/2020');
insert into Participants (listing_id, user_id, joined_on, end_on) values ('d95a6c2e-3c33-447c-be0c-be399247dd3f', 'b7662cd1-a2c9-4054-95e7-078e35ea6fa1', '12/14/2019', '9/3/2020');
insert into Participants (listing_id, user_id, joined_on, end_on) values ('43824166-bee2-426e-8a08-ca2c4e4120ae', 'd69a127d-815b-4834-b2b6-54ab398fccad', '2/22/2020', '8/10/2020');
insert into Participants (listing_id, user_id, joined_on, end_on) values ('c975a572-452d-4824-8ed5-500b50488436', 'd69a127d-815b-4834-b2b6-54ab398fccad', '2/12/2020', '9/4/2020');
insert into Participants (listing_id, user_id, joined_on, end_on) values ('d95a6c2e-3c33-447c-be0c-be399247dd3f', 'd69a127d-815b-4834-b2b6-54ab398fccad', '3/21/2019', '9/23/2020');
insert into Participants (listing_id, user_id, joined_on, end_on) values ('cf4adc93-3b96-4bbc-8cb0-41e196b145ac', 'd69a127d-815b-4834-b2b6-54ab398fccad', '6/13/2020', null);
insert into Participants (listing_id, user_id, joined_on, end_on) values ('c975a572-452d-4824-8ed5-500b50488436', 'f997120c-2956-482e-9ba3-81a12b4fecc1', '7/10/2019', null);
insert into Participants (listing_id, user_id, joined_on, end_on) values ('d95a6c2e-3c33-447c-be0c-be399247dd3f', 'f997120c-2956-482e-9ba3-81a12b4fecc1', '7/25/2018', null);
insert into Participants (listing_id, user_id, joined_on, end_on) values ('e411bd80-d5cf-49ac-b847-18c9fc13377a', 'f997120c-2956-482e-9ba3-81a12b4fecc1', '2/9/2019', null);

/* Jobs mock data population */
insert into jobs (listing_id, job_title, job_description) values ('43824166-bee2-426e-8a08-ca2c4e4120ae', 'Account Representative I', 'Polarised next generation alliance');
insert into jobs (listing_id, job_title, job_description) values ('43824166-bee2-426e-8a08-ca2c4e4120ae', 'Project Manager', 'Ameliorated 24 hour structure');
insert into jobs (listing_id, job_title, job_description) values ('43824166-bee2-426e-8a08-ca2c4e4120ae', 'Teacher', 'Enhanced 6th generation portal');
insert into jobs (listing_id, job_title, job_description) values ('43824166-bee2-426e-8a08-ca2c4e4120ae', 'VP Accounting', 'Multi-channelled local pricing structure');
insert into jobs (listing_id, job_title, job_description) values ('43824166-bee2-426e-8a08-ca2c4e4120ae', 'Office Assistant IV', 'Vision-oriented explicit moratorium');
insert into jobs (listing_id, job_title, job_description) values ('c975a572-452d-4824-8ed5-500b50488436', 'Senior Editor', 'Devolved high-level protocol');
insert into jobs (listing_id, job_title, job_description) values ('c975a572-452d-4824-8ed5-500b50488436', 'Civil Engineer', 'Front-line optimal algorithm');
insert into jobs (listing_id, job_title, job_description) values ('c975a572-452d-4824-8ed5-500b50488436', 'Senior Quality Engineer', 'Exclusive incremental toolset');
insert into jobs (listing_id, job_title, job_description) values ('c975a572-452d-4824-8ed5-500b50488436', 'Programmer Analyst I', 'Polarised bifurcated open architecture');
insert into jobs (listing_id, job_title, job_description) values ('c975a572-452d-4824-8ed5-500b50488436', 'Paralegal', 'Networked intangible system engine');
insert into jobs (listing_id, job_title, job_description) values ('d95a6c2e-3c33-447c-be0c-be399247dd3f', 'Project Manager', 'Profound optimizing matrix');
insert into jobs (listing_id, job_title, job_description) values ('d95a6c2e-3c33-447c-be0c-be399247dd3f', 'Tax Accountant', 'Realigned grlisting_id-enabled forecast');
insert into jobs (listing_id, job_title, job_description) values ('d95a6c2e-3c33-447c-be0c-be399247dd3f', 'Software Test Engineer II', 'Right-sized 3rd generation throughput');
insert into jobs (listing_id, job_title, job_description) values ('d95a6c2e-3c33-447c-be0c-be399247dd3f', 'Teacher', 'Universal executive Graphical User Interface');
insert into jobs (listing_id, job_title, job_description) values ('d95a6c2e-3c33-447c-be0c-be399247dd3f', 'Community Outreach Specialist', 'Monitored asynchronous initiative');
insert into jobs (listing_id, job_title, job_description) values ('d95a6c2e-3c33-447c-be0c-be399247dd3f', 'Compensation Analyst', 'Universal 24 hour protocol');
insert into jobs (listing_id, job_title, job_description) values ('cf4adc93-3b96-4bbc-8cb0-41e196b145ac', 'VP Marketing', 'Inverse user-facing ability');
insert into jobs (listing_id, job_title, job_description) values ('cf4adc93-3b96-4bbc-8cb0-41e196b145ac', 'Teacher', 'Phased bottom-line encryption');
insert into jobs (listing_id, job_title, job_description) values ('e411bd80-d5cf-49ac-b847-18c9fc13377a', 'Chemical Engineer', 'Synergistic stable encryption');
insert into jobs (listing_id, job_title, job_description) values ('e411bd80-d5cf-49ac-b847-18c9fc13377a', 'Web Developer IV', 'Focused encompassing archive');
insert into jobs (listing_id, job_title, job_description) values ('e411bd80-d5cf-49ac-b847-18c9fc13377a', 'Assistant Professor', 'Public-key heuristic encryption');

/* Likes (User-Listings) mock data population */
insert into Likes (user_id, listing_id) values ('f96b2138-1754-4c17-a405-940e20adc601', '43824166-bee2-426e-8a08-ca2c4e4120ae');
insert into Likes (user_id, listing_id) values ('f96b2138-1754-4c17-a405-940e20adc601', 'c975a572-452d-4824-8ed5-500b50488436');
insert into Likes (user_id, listing_id) values ('f96b2138-1754-4c17-a405-940e20adc601', 'e411bd80-d5cf-49ac-b847-18c9fc13377a');
insert into Likes (user_id, listing_id) values ('b7662cd1-a2c9-4054-95e7-078e35ea6fa1', '43824166-bee2-426e-8a08-ca2c4e4120ae');
insert into Likes (user_id, listing_id) values ('b7662cd1-a2c9-4054-95e7-078e35ea6fa1', 'c975a572-452d-4824-8ed5-500b50488436');
insert into Likes (user_id, listing_id) values ('b7662cd1-a2c9-4054-95e7-078e35ea6fa1', 'e411bd80-d5cf-49ac-b847-18c9fc13377a');
insert into Likes (user_id, listing_id) values ('d69a127d-815b-4834-b2b6-54ab398fccad', '43824166-bee2-426e-8a08-ca2c4e4120ae');
insert into Likes (user_id, listing_id) values ('d69a127d-815b-4834-b2b6-54ab398fccad', 'c975a572-452d-4824-8ed5-500b50488436');
insert into Likes (user_id, listing_id) values ('d69a127d-815b-4834-b2b6-54ab398fccad', 'e411bd80-d5cf-49ac-b847-18c9fc13377a');
insert into Likes (user_id, listing_id) values ('f997120c-2956-482e-9ba3-81a12b4fecc1', '43824166-bee2-426e-8a08-ca2c4e4120ae');
insert into Likes (user_id, listing_id) values ('f997120c-2956-482e-9ba3-81a12b4fecc1', 'c975a572-452d-4824-8ed5-500b50488436');
insert into Likes (user_id, listing_id) values ('f997120c-2956-482e-9ba3-81a12b4fecc1', 'e411bd80-d5cf-49ac-b847-18c9fc13377a');
insert into Likes (user_id, listing_id) values ('2e9c26a0-7c1c-49d1-8c78-3a0545ca22eb', 'c975a572-452d-4824-8ed5-500b50488436');

/* HashTags mock data population */
insert into HashTags (listing_id, tag) values ('43824166-bee2-426e-8a08-ca2c4e4120ae', '#broker0');
insert into HashTags (listing_id, tag) values ('43824166-bee2-426e-8a08-ca2c4e4120ae', '#sandyfirth1');
insert into HashTags (listing_id, tag) values ('43824166-bee2-426e-8a08-ca2c4e4120ae', '#tudhope2');
insert into HashTags (listing_id, tag) values ('c975a572-452d-4824-8ed5-500b50488436', '#slatford3');
insert into HashTags (listing_id, tag) values ('c975a572-452d-4824-8ed5-500b50488436', '#clissell4');
insert into HashTags (listing_id, tag) values ('c975a572-452d-4824-8ed5-500b50488436', '#bateup5');
insert into HashTags (listing_id, tag) values ('d95a6c2e-3c33-447c-be0c-be399247dd3f', '#smallcomb6');
insert into HashTags (listing_id, tag) values ('d95a6c2e-3c33-447c-be0c-be399247dd3f', '#wyrall7');
insert into HashTags (listing_id, tag) values ('cf4adc93-3b96-4bbc-8cb0-41e196b145ac', '#boteman8');
insert into HashTags (listing_id, tag) values ('cf4adc93-3b96-4bbc-8cb0-41e196b145ac', '#joontjes9');
insert into HashTags (listing_id, tag) values ('e411bd80-d5cf-49ac-b847-18c9fc13377a', '#baudina');
INSERT INTO "public"."hashtags" ("listing_id", "tag") VALUES
('1276b4eb-df3a-4de3-bcae-a450ed96eeac', '#kampong'),
('1276b4eb-df3a-4de3-bcae-a450ed96eeac', '#socialgood'),
('1276b4eb-df3a-4de3-bcae-a450ed96eeac', '#initiative');

/* Milestones mock data population */
insert into Milestones (listing_id, description, date) values ('43824166-bee2-426e-8a08-ca2c4e4120ae', 'De-engineered content-based solution', '2019-06-01 11:27:43');
insert into Milestones (listing_id, description, date) values ('43824166-bee2-426e-8a08-ca2c4e4120ae', 'Centralized stable groupware', '2020-07-09 11:30:19');
insert into Milestones (listing_id, description, date) values ('c975a572-452d-4824-8ed5-500b50488436', 'Future-proofed systemic interface', '2016-11-13 21:27:33');
insert into Milestones (listing_id, description, date) values ('c975a572-452d-4824-8ed5-500b50488436', 'Pre-emptive static installation', '2015-08-06 09:28:56');
insert into Milestones (listing_id, description, date) values ('c975a572-452d-4824-8ed5-500b50488436', 'Multi-channelled secondary model', '2016-12-04 03:14:39');
insert into Milestones (listing_id, description, date) values ('d95a6c2e-3c33-447c-be0c-be399247dd3f', 'Intuitive client-driven knowledge user', '2018-12-16 08:49:35');
insert into Milestones (listing_id, description, date) values ('d95a6c2e-3c33-447c-be0c-be399247dd3f', 'Monitored attitude-oriented array', '2017-11-23 11:53:21');
insert into Milestones (listing_id, description, date) values ('cf4adc93-3b96-4bbc-8cb0-41e196b145ac', 'Monitored object-oriented access', '2020-01-21 19:04:19');
insert into Milestones (listing_id, description, date) values ('e411bd80-d5cf-49ac-b847-18c9fc13377a', 'Managed attitude-oriented frame', '2020-02-12 22:30:42');
INSERT INTO "public"."milestones" ("listing_id", "description", "date") VALUES
('1276b4eb-df3a-4de3-bcae-a450ed96eeac', 'Profile Listing', '2020-08-21 16:00:00'),
('1276b4eb-df3a-4de3-bcae-a450ed96eeac', 'Location', '2020-09-18 16:00:00'),
('1276b4eb-df3a-4de3-bcae-a450ed96eeac', 'One-Pager Template for Project Listing Platform', '2020-08-07 16:00:00'),
('1276b4eb-df3a-4de3-bcae-a450ed96eeac', 'Project Browsing and Filtering', '2020-07-31 16:00:00'),
('1276b4eb-df3a-4de3-bcae-a450ed96eeac', 'Individual Portfolio Dashboard', '2020-08-14 16:00:00'),
('1276b4eb-df3a-4de3-bcae-a450ed96eeac', 'Project- Profile Matching & Recommendation', '2020-11-30 16:00:00'),
('1276b4eb-df3a-4de3-bcae-a450ed96eeac', 'On-Platform Chat', '2020-10-31 16:00:00');

/* ListingAdmins mock data population */
insert into ListingAdmins (user_id, listing_id) values ('d69a127d-815b-4834-b2b6-54ab398fccad', '43824166-bee2-426e-8a08-ca2c4e4120ae');
insert into ListingAdmins (user_id, listing_id) values ('d69a127d-815b-4834-b2b6-54ab398fccad', 'c975a572-452d-4824-8ed5-500b50488436');
insert into ListingAdmins (user_id, listing_id) values ('f997120c-2956-482e-9ba3-81a12b4fecc1', '43824166-bee2-426e-8a08-ca2c4e4120ae');
insert into ListingAdmins (user_id, listing_id) values ('f997120c-2956-482e-9ba3-81a12b4fecc1', 'd95a6c2e-3c33-447c-be0c-be399247dd3f');
insert into ListingAdmins (user_id, listing_id) values ('f997120c-2956-482e-9ba3-81a12b4fecc1', 'c975a572-452d-4824-8ed5-500b50488436');
insert into ListingAdmins (user_id, listing_id) values ('2e9c26a0-7c1c-49d1-8c78-3a0545ca22eb', 'd95a6c2e-3c33-447c-be0c-be399247dd3f');

/* Features (featured-listings) mock data population */
insert into FeaturedListings (listing_id) values ('43824166-bee2-426e-8a08-ca2c4e4120ae');
insert into FeaturedListings (listing_id) values ('c975a572-452d-4824-8ed5-500b50488436');
insert into FeaturedListings (listing_id) values ('d95a6c2e-3c33-447c-be0c-be399247dd3f');

insert into ListingUpdates (listing_id, description, pic1, pic2, pic3, pic4, pic5, created_on, updated_on) values ('43824166-bee2-426e-8a08-ca2c4e4120ae', 'Horizontal dynamic encoding', 'https://robohash.org/utetut.bmp?size=500x500&set=set1', 'https://robohash.org/quiserrorlabore.jpg?size=500x500&set=set1', 'https://robohash.org/aspernaturcupiditateerror.png?size=500x500&set=set1', 'https://robohash.org/dolorevenietmaiores.jpg?size=500x500&set=set1', 'https://robohash.org/utconsequaturatque.bmp?size=500x500&set=set1', '2020-05-05 02:20:02', '2020-04-28 01:06:06');
insert into ListingUpdates (listing_id, description, pic1, pic2, pic3, pic4, pic5, created_on, updated_on) values ('43824166-bee2-426e-8a08-ca2c4e4120ae', 'Inverse eco-centric conglomeration', 'https://robohash.org/sititaqueiure.jpg?size=500x500&set=set1', 'https://robohash.org/facilisimpeditsoluta.bmp?size=500x500&set=set1', 'https://robohash.org/atquererumvoluptatem.jpg?size=500x500&set=set1', 'https://robohash.org/quietreprehenderit.bmp?size=500x500&set=set1', 'https://robohash.org/suscipittemporeet.png?size=500x500&set=set1', '2020-07-08 12:26:55', '2020-08-10 10:06:35');
insert into ListingUpdates (listing_id, description, pic1, pic2, pic3, pic4, pic5, created_on, updated_on) values ('c975a572-452d-4824-8ed5-500b50488436', 'Persistent regional open system', 'https://robohash.org/sedaspernaturomnis.bmp?size=500x500&set=set1', 'https://robohash.org/autdeseruntdolorem.bmp?size=500x500&set=set1', 'https://robohash.org/autnumquamitaque.png?size=500x500&set=set1', null, 'https://robohash.org/molestiaefacereautem.bmp?size=500x500&set=set1', '2019-11-17 10:37:58', '2020-04-17 07:43:37');
insert into ListingUpdates (listing_id, description, pic1, pic2, pic3, pic4, pic5, created_on, updated_on) values ('c975a572-452d-4824-8ed5-500b50488436', 'Intuitive secondary complexity', 'https://robohash.org/nihildolorqui.png?size=500x500&set=set1', 'https://robohash.org/quieiusquo.jpg?size=500x500&set=set1', 'https://robohash.org/quidemquibusdamquia.bmp?size=500x500&set=set1', null, null, '2019-03-26 14:42:40', '2019-11-08 21:10:46');
insert into ListingUpdates (listing_id, description, pic1, pic2, pic3, pic4, pic5, created_on, updated_on) values ('c975a572-452d-4824-8ed5-500b50488436', 'Phased reciprocal parallelism', 'https://robohash.org/providentdolorrecusandae.png?size=500x500&set=set1', 'https://robohash.org/consequaturabalias.png?size=500x500&set=set1', 'https://robohash.org/enimnobisconsequatur.jpg?size=500x500&set=set1', 'https://robohash.org/sedfacerepraesentium.bmp?size=500x500&set=set1', 'https://robohash.org/perferendisaniminesciunt.jpg?size=500x500&set=set1', '2019-04-07 14:09:54', '2020-03-05 03:18:07');
insert into ListingUpdates (listing_id, description, pic1, pic2, pic3, pic4, pic5, created_on, updated_on) values ('d95a6c2e-3c33-447c-be0c-be399247dd3f', 'Enterprise-wide leading edge productivity', 'https://robohash.org/aliasetest.jpg?size=500x500&set=set1', 'https://robohash.org/necessitatibusimpeditmodi.jpg?size=500x500&set=set1', 'https://robohash.org/assumendasiteligendi.bmp?size=500x500&set=set1', 'https://robohash.org/quiasuntassumenda.bmp?size=500x500&set=set1', null, '2020-06-03 08:49:01', '2019-08-20 09:01:49');
insert into ListingUpdates (listing_id, description, pic1, pic2, pic3, pic4, pic5, created_on, updated_on) values ('cf4adc93-3b96-4bbc-8cb0-41e196b145ac', 'Business-focused multi-state productivity', 'https://robohash.org/doloresisteblanditiis.jpg?size=500x500&set=set1', 'https://robohash.org/suntveroet.jpg?size=500x500&set=set1', 'https://robohash.org/quosquorerum.bmp?size=500x500&set=set1', 'https://robohash.org/sitmollitiaipsa.jpg?size=500x500&set=set1', 'https://robohash.org/esseexincidunt.bmp?size=500x500&set=set1', '2020-04-19 07:13:44', '2020-07-17 21:39:35');

/* ListingComments data population */
insert into ListingComments (listing_id, user_id, comment, reply_to_id, created_on, updated_on) values ('43824166-bee2-426e-8a08-ca2c4e4120ae', 'f96b2138-1754-4c17-a405-940e20adc601', 'strategize 24/365 users', null, '2020-03-04 10:03:23', '2020-08-30 20:09:10');
insert into ListingComments (listing_id, user_id, comment, reply_to_id, created_on, updated_on) values ('c975a572-452d-4824-8ed5-500b50488436', 'f96b2138-1754-4c17-a405-940e20adc601', 'visualize dot-com solutions', null, '2020-02-25 17:57:48', '2020-07-28 21:38:30');
insert into ListingComments (listing_id, user_id, comment, reply_to_id, created_on, updated_on) values ('43824166-bee2-426e-8a08-ca2c4e4120ae', 'f96b2138-1754-4c17-a405-940e20adc601', 'revolutionize out-of-the-box interfaces', 1, '2019-11-24 04:26:00', '2020-08-04 02:55:30');
insert into ListingComments (listing_id, user_id, comment, reply_to_id, created_on, updated_on) values ('c975a572-452d-4824-8ed5-500b50488436', 'b7662cd1-a2c9-4054-95e7-078e35ea6fa1', 'benchmark web-enabled experiences', null, '2019-10-18 14:46:56', '2020-07-17 21:51:32');
insert into ListingComments (listing_id, user_id, comment, reply_to_id, created_on, updated_on) values ('d95a6c2e-3c33-447c-be0c-be399247dd3f', 'b7662cd1-a2c9-4054-95e7-078e35ea6fa1', 'mesh 24/365 supply-chains', null, '2020-02-21 04:58:36', '2020-03-01 07:21:38');
insert into ListingComments (listing_id, user_id, comment, reply_to_id, created_on, updated_on) values ('c975a572-452d-4824-8ed5-500b50488436', 'b7662cd1-a2c9-4054-95e7-078e35ea6fa1', 'scale robust platforms', 4, '2020-01-23 14:20:13', '2020-06-23 14:17:43');
insert into ListingComments (listing_id, user_id, comment, reply_to_id, created_on, updated_on) values ('d95a6c2e-3c33-447c-be0c-be399247dd3f', 'd69a127d-815b-4834-b2b6-54ab398fccad', 'incubate leading-edge partnerships', null, '2020-08-20 23:56:14', '2019-10-08 17:00:24');
insert into ListingComments (listing_id, user_id, comment, reply_to_id, created_on, updated_on) values ('43824166-bee2-426e-8a08-ca2c4e4120ae', 'd69a127d-815b-4834-b2b6-54ab398fccad', 'harness viral web services', 3, '2019-11-17 06:38:44', '2019-12-10 18:58:28');
insert into ListingComments (listing_id, user_id, comment, reply_to_id, created_on, updated_on) values ('cf4adc93-3b96-4bbc-8cb0-41e196b145ac', 'd69a127d-815b-4834-b2b6-54ab398fccad', 'whiteboard best-of-breed deliverables', null, '2020-03-29 17:51:13', '2019-11-09 01:45:40');
insert into ListingComments (listing_id, user_id, comment, reply_to_id, created_on, updated_on) values ('c975a572-452d-4824-8ed5-500b50488436', 'd69a127d-815b-4834-b2b6-54ab398fccad', 'deliver frictionless infrastructures', 2, '2019-10-30 00:32:01', '2020-04-27 21:18:40');
insert into ListingComments (listing_id, user_id, comment, reply_to_id, created_on, updated_on) values ('43824166-bee2-426e-8a08-ca2c4e4120ae', 'f997120c-2956-482e-9ba3-81a12b4fecc1', 'recontextualize leading-edge networks', 3, '2020-06-24 21:21:47', '2020-06-21 01:48:47');
insert into ListingComments (listing_id, user_id, comment, reply_to_id, created_on, updated_on) values ('43824166-bee2-426e-8a08-ca2c4e4120ae', 'f997120c-2956-482e-9ba3-81a12b4fecc1', 'orchestrate intuitive deliverables', 11, '2019-10-05 15:40:48', '2020-06-08 19:49:10');
insert into ListingComments (listing_id, user_id, comment, reply_to_id, created_on, updated_on) values ('cf4adc93-3b96-4bbc-8cb0-41e196b145ac', 'f997120c-2956-482e-9ba3-81a12b4fecc1', 'orchestrate sexy ROI', null, '2020-04-02 05:24:48', '2019-12-27 16:54:38');
insert into ListingComments (listing_id, user_id, comment, reply_to_id, created_on, updated_on) values ('e411bd80-d5cf-49ac-b847-18c9fc13377a', 'f997120c-2956-482e-9ba3-81a12b4fecc1', 'brand end-to-end web services', null, '2020-05-23 01:54:34', '2020-06-20 12:56:02');
insert into ListingComments (listing_id, user_id, comment, reply_to_id, created_on, updated_on) values ('43824166-bee2-426e-8a08-ca2c4e4120ae', 'f997120c-2956-482e-9ba3-81a12b4fecc1', 'grow integrated systems', 11, '2020-05-15 20:35:48', '2019-11-08 04:23:03');
insert into ListingComments (listing_id, user_id, comment, reply_to_id, created_on, updated_on) values ('43824166-bee2-426e-8a08-ca2c4e4120ae', '2e9c26a0-7c1c-49d1-8c78-3a0545ca22eb', 'implement innovative platforms', 11, '2020-06-17 09:31:57', '2020-07-06 02:43:45');

/* ListingLocations */
insert into ListingLocations (listing_id, location_id) values ('43824166-bee2-426e-8a08-ca2c4e4120ae', 1);
insert into ListingLocations (listing_id, location_id) values ('43824166-bee2-426e-8a08-ca2c4e4120ae', 2);
insert into ListingLocations (listing_id, location_id) values ('43824166-bee2-426e-8a08-ca2c4e4120ae', 3);
insert into ListingLocations (listing_id, location_id) values ('c975a572-452d-4824-8ed5-500b50488436', 3);
insert into ListingLocations (listing_id, location_id) values ('d95a6c2e-3c33-447c-be0c-be399247dd3f', 3);
insert into ListingLocations (listing_id, location_id) values ('cf4adc93-3b96-4bbc-8cb0-41e196b145ac', 3);
insert into ListingLocations (listing_id, location_id) values ('c975a572-452d-4824-8ed5-500b50488436', 4);
insert into ListingLocations (listing_id, location_id) values ('cf4adc93-3b96-4bbc-8cb0-41e196b145ac', 4);
