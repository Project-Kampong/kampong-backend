/* Login user population */
insert into loginuser (user_id, username, email, password, role) values ('f96b2138-1754-4c17-a405-940e20adc601', 'Admin1', 'admin@gmail.com', $1, 'admin'),
('d69a127d-815b-4834-b2b6-54ab398fccad', 'User1', 'user@gmail.com', $1, 'user'),
('b7662cd1-a2c9-4054-95e7-078e35ea6fa1', 'WayneLee', 'wlcs95@gmail.com', $1, 'admin'),
('f997120c-2956-482e-9ba3-81a12b4fecc1', 'DarrenSim', 'kalsycofficial@gmail.com', $1, 'user'),
('2e9c26a0-7c1c-49d1-8c78-3a0545ca22eb', 'CherylSeow', 'cherylxseow@gmail.com', $1, 'user');

/* User profile population */
insert into profile (user_id, nickname, profile_picture, about, gender, dob, occupation, phone, facebook_link, twitter_link, instagram_link, linkedin_link) values ('f96b2138-1754-4c17-a405-940e20adc601', 'Wayne', 'https://images.pexels.com/photos/1561863/pexels-photo-1561863.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260', 'Quality-focused impactful projection', 'o', '1985-04-18 00:43:59', 'Geological Engineer', 97690390, 'http://baidu.com/ipsum/primis/in/faucibus/orci/luctus.xml', 'http://nhs.uk/at/diam/nam.png', 'http://nasa.gov/pede/justo/eu/massa/donec/dapibus/duis.aspx', 'https://linkedin.com/ante/vestibulum/ante/ipsum/primis/in.json'),
('b7662cd1-a2c9-4054-95e7-078e35ea6fa1', 'Derrick', 'https://images.pexels.com/photos/2434268/pexels-photo-2434268.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260', 'KFC is an American fast food restaurant chain headquartered in Louisville, Kentucky, that specializes in fried chicken. It is the world''s second-largest restaurant chain after McDonald''s, with 22,621 locations globally in 150 countries as of December 2019. The chain is a subsidiary of Yum', 'm', '1990-05-07 15:40:00', 'KFC Expert', '96831702', 'https://jigsy.com/eu/interdum/eu/tincidunt/in.html', 'http://nasa.gov/nisi/at/nibh/in/hac/habitasse.png', 'https://360.cn/sed/nisl/nunc/rhoncus/dui/vel.jpg', 'https://cbc.ca/id/luctus/nec/molestie/sed/justo/pellentesque.png'), 
('d69a127d-815b-4834-b2b6-54ab398fccad', 'Aaron', 'https://images.pexels.com/photos/1368347/pexels-photo-1368347.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260', 'Down-sized disintermediate circuit', 'f', '2003-09-22 08:32:55', 'Statistician IV', 87685829, 'https://tripadvisor.com/ornare/imperdiet.png', 'https://google.com/quis/orci/nullam/molestie/nibh/in/lectus.xml', 'http://1und1.de/in/libero/ut/massa.png', 'http://i2i.jp/imperdiet/sapien/urna/pretium/nisl/ut.jpg'), 
('f997120c-2956-482e-9ba3-81a12b4fecc1', 'Viki Tay', 'https://images.pexels.com/photos/2426551/pexels-photo-2426551.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260', 'Face to face neutral conglomeration', 'u', '2000-07-04 19:07:24', 'VP Product Management', 84428699, 'https://nhs.uk/mauris.xml', 'http://uiuc.edu/sit/amet/consectetuer/adipiscing/elit/proin.aspx', 'http://cbsnews.com/elementum/eu/interdum.jsp', 'https://hibu.com/quam/sapien/varius/ut/blandit/non/interdum.html'), 
('2e9c26a0-7c1c-49d1-8c78-3a0545ca22eb', 'Constance Tan', 'https://images.pexels.com/photos/2426656/pexels-photo-2426656.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260', 'Front-line non-volatile conglomeration', 'o', '1996-04-04 20:05:06', 'Software Engineer II', 84677316, 'http://51.la/dui/maecenas/tristique/est.json', 'https://mozilla.com/sagittis.jsp', 'http://vk.com/cubilia.html', 'https://bravesites.com/ut/mauris/eget/massa.jpg');

/* Listings population */
INSERT INTO "public"."listing" ("listing_id", "created_by", "listing_title", "category", "about", "tagline", "mission", "listing_url", "pics", "is_published", "is_verified", "start_date", "end_date", "created_on", "deleted_on", "listing_status", "listing_email", "overview", "problem", "solution", "outcome") VALUES
('1276b4eb-df3a-4de3-bcae-a450ed96eeac', 'b7662cd1-a2c9-4054-95e7-078e35ea6fa1', 'Project Kampong', 'Technology', NULL, 'With Kampong you can', 'To build a platform that connects people with ideas and skills to build and track social good project initiatives', 'www.test.com', ARRAY['https://kampong-dev.s3.ap-southeast-1.amazonaws.com/kampong%20logo-1597985636566.jpeg', 'https://kampong-dev.s3.ap-southeast-1.amazonaws.com/group-large-1597985817857.png'], 'f', 'f', '2020-08-21 04:50:15.047753', NULL, '2020-08-21 04:50:15.047753', NULL, 'ongoing', 'joinourkampong@gmail.com', 'Formed in Sept 2019, a result of the Youth Action Challenge under the Ministry of Culture, Community, and Youth (MCCY), National Youth Council (NYC) and People''s Association Youth Movement (PAYM). PKG hopes to understand the existing gaps in the communication & information network systems which are utilized in the Social Sector in Singapore. 


Our platform seeks to serve as an integrative shared central platform starting by creating visibility on completed and ongoing social good activities/initiatives. The aim of PKG is to lower the barrier for stakeholders to collaborate and create sustainable projects with trackable impacts.
The current members of Project Kampong met each other at the YAC workshops hosted, ideated and formed Project Kampong.', 'Current providers include Volunteer.sg & Giving.sg. However, these platforms are not able to fully support the growth of initiatives but are instead a depository of resources to tap on for manpower and funds respectively. PKG would like to build capacity to meet the information visibility gap in the social sector. Being an aggregator or ecosystem builder is a growing trend with the likes of Trybe and A Good Space. However, the ecosystems in which these organizations have built are not available openly. 


The restriction of such information has resulted in a lack of benchmarking in efforts directed towards addressing social issues. There is uncertainty as to who and how is actively working towards solving that problem. The lack of visibility and communication results in similar initiatives being created and sometimes funded from the same source. 


The sooner this capacity is built, the sooner PKG will be able to engage the prospective users to efficiently start their own initiatives or find existing ones to join and contribute. 
PKG operates and develops in a series of sprints whereby in each sprint, a new feature will be rolled out, tested and deployed.', 'Project Kampong is an online platform aggregator for youths to connect, collaborate and create social good initiatives for the benefit of their respective communities.
Through skills and idea matching and intuitive progress tracking, we aim to be an online platform that collates and promotes collaboration.

As part of the Singapore''s TogetherSG movement, having a shared central network system is crucial towards the aim of community development. Collaborative systems and Visibility are key areas in which focus, and resources should be poured into. Having an asset mapping tool is essential towards any initiatives or goals served by platforms like Project Kampong.', 'Youths today are becoming increasingly engaged in social issues. However, when trying to kick start their ideas, they often bump into a couple of problems: the lack of connection with people with the right skills, the resources to expand the ideas, or a platform to commit to. Youths that do start their ideas also face issues with project sustainability, such as making sure their ideas continue to deliver impact and staying afloat in the long run.'),
('43824166-bee2-426e-8a08-ca2c4e4120ae', 'f96b2138-1754-4c17-a405-940e20adc601', 'Rebuilding Homes', 'Housing', 'Customer-focused dynamic installation', 'Building Better Lives', 'Sharing compassion', 'http://ifeng.com/nisl.jsp', ARRAY['https://images.pexels.com/photos/2219024/pexels-photo-2219024.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260', 'https://robohash.org/ipsaiuresed.bmp?size=500x500&set=set1', 'https://robohash.org/animiautvoluptas.jpg?size=500x500&set=set1', 'https://robohash.org/fugaidconsequatur.png?size=500x500&set=set1'], 'f', 'f', '2020-12-01 19:09:20', NULL, '2020-08-20 17:36:45.815638', NULL, 'ongoing', 'rebuildhome@gmail.com', NULL, NULL, NULL, NULL),
('c975a572-452d-4824-8ed5-500b50488436', 'b7662cd1-a2c9-4054-95e7-078e35ea6fa1', 'CommStart 2020', 'Manpower', 'Team-oriented context-sensitive forecast', 'Innovating Ideas, Creating Opportunities', 'Cultivating entrepreneurship and community impact', 'https://ehow.com/in/imperdiet/et/commodo/vulputate/justo.xml', ARRAY['https://images.pexels.com/photos/3637796/pexels-photo-3637796.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260'], 'f', 'f', '2020-07-30 13:54:45', NULL, '2020-08-20 17:36:45.815638', NULL, 'ongoing', 'commstart2020@gmail.com', 'Up-sized hybrid moratorium', 'Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.', 'Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.', 'nam nulla integer pede justo lacinia eget tincidunt eget tempus vel pede morbi porttitor lorem id ligula suspendisse'),
('cf4adc93-3b96-4bbc-8cb0-41e196b145ac', 'f997120c-2956-482e-9ba3-81a12b4fecc1', 'YOUTH Mentorship Programme', 'Youth', 'Cloned 4th generation matrices', 'Paving the way for the future generations', 'Strengthening bonds', 'https://toplist.cz/aliquam.xml', ARRAY['https://images.pexels.com/photos/754769/pexels-photo-754769.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260', 'https://robohash.org/utsednostrum.png?size=500x500&set=set1', 'https://robohash.org/laudantiumconsequatursequi.png?size=500x500&set=set1'], 'f', 'f', '2020-12-25 22:21:11', NULL, '2020-08-20 17:36:45.815638', NULL, 'ongoing', 'youthmentors@gmail.com', 'Switchable neutral Graphic Interface', 'Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.', 'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros. Vestibulum ac est lacinia nisi venenatis tristique.', 'pellentesque quisque porta volutpat erat quisque erat eros viverra eget congue eget semper rutrum nulla nunc'),
('d95a6c2e-3c33-447c-be0c-be399247dd3f', 'd69a127d-815b-4834-b2b6-54ab398fccad', 'Supporting COVID-19 Efforts', 'Health', 'Triple-buffered client-server installation', 'Emerge stronger together', 'streamline web-enabled ROI', 'https://mtv.com/blandit/mi/in.png', ARRAY['https://images.pexels.com/photos/127873/pexels-photo-127873.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260', 'https://robohash.org/auteligendimagnam.bmp?size=500x500&set=set1'], 'f', 'f', '2020-01-01 20:54:13', NULL, '2020-08-20 17:36:45.815638', NULL, 'ongoing', 'fightcovid@gmail.com', NULL, NULL, NULL, NULL),
('e411bd80-d5cf-49ac-b847-18c9fc13377a', '2e9c26a0-7c1c-49d1-8c78-3a0545ca22eb', 'Project Donation Drive', 'Elderly', 'Adaptive disintermediate Graphical User Interface', 'Bridging communities', 'e-enable dot-com metrics', 'http://i2i.jp/rhoncus/dui/vel.jpg', ARRAY['https://images.pexels.com/photos/339620/pexels-photo-339620.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260', 'https://robohash.org/atquemolestiasvelit.jpg?size=500x500&set=set1', 'https://robohash.org/nonquodquam.png?size=500x500&set=set1', 'https://robohash.org/voluptaslaborumsimilique.png?size=500x500&set=set1'], 'f', 'f', '2020-03-19 11:04:15', NULL, '2020-08-20 17:36:45.815638', NULL, 'completed', 'donationdrive2020@gmail.com', 'Integrated fresh-thinking parallelism', 'Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.', 'Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus. Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci.', 'neque aenean auctor gravida sem praesent id massa id nisl venenatis lacinia aenean sit amet justo');

/* ListingStories with paragraphed text */


/* FAQ mock data population */
insert into faq (listing_id, question, answer) values ('43824166-bee2-426e-8a08-ca2c4e4120ae', 'consequat nulla nisl nunc nisl duis bibendum felis', '24/7'), 
('43824166-bee2-426e-8a08-ca2c4e4120ae', 'mus vivamus vestibulum sagittis sapien cum sociis natoque penatibus et magnis dis', 'Graphic Interface'), 
('43824166-bee2-426e-8a08-ca2c4e4120ae', 'mauris vulputate elementum nullam varius nulla facilisi cras', 'conglomeration'), 
('43824166-bee2-426e-8a08-ca2c4e4120ae', 'felis donec semper sapien a libero nam dui proin leo odio porttitor', 'Visionary'), 
('43824166-bee2-426e-8a08-ca2c4e4120ae', 'congue risus semper porta volutpat quam', 'logistical'), 
('c975a572-452d-4824-8ed5-500b50488436', 'vel est donec odio justo sollicitudin ut suscipit a', 'neutral'), 
('c975a572-452d-4824-8ed5-500b50488436', 'odio in hac habitasse platea dictumst maecenas ut massa quis augue', 'analyzer'), 
('c975a572-452d-4824-8ed5-500b50488436', 'sed sagittis nam congue risus semper porta volutpat quam pede lobortis ligula', '3rd generation'), 
('c975a572-452d-4824-8ed5-500b50488436', 'cras mi pede malesuada in imperdiet et commodo vulputate justo', 'internet solution'), 
('c975a572-452d-4824-8ed5-500b50488436', 'vestibulum vestibulum ante ipsum primis in faucibus orci luctus et ultrices', 'superstructure'), 
('c975a572-452d-4824-8ed5-500b50488436', 'sit amet consectetuer adipiscing elit proin interdum mauris non ligula pellentesque', 'Cloned'), 
('d95a6c2e-3c33-447c-be0c-be399247dd3f', 'turpis sed ante vivamus tortor duis mattis', 'Managed'), 
('d95a6c2e-3c33-447c-be0c-be399247dd3f', 'id sapien in sapien iaculis congue', 'Switchable'), 
('d95a6c2e-3c33-447c-be0c-be399247dd3f', 'ac enim in tempor turpis nec euismod scelerisque quam turpis', 'Fundamental'), 
('d95a6c2e-3c33-447c-be0c-be399247dd3f', 'cras non velit nec nisi vulputate nonummy', 'solution'), 
('cf4adc93-3b96-4bbc-8cb0-41e196b145ac', 'erat tortor sollicitudin mi sit amet lobortis sapien sapien non mi integer', 'Fully-configurable'), 
('cf4adc93-3b96-4bbc-8cb0-41e196b145ac', 'sagittis sapien cum sociis natoque penatibus et magnis dis', 'workforce'), 
('cf4adc93-3b96-4bbc-8cb0-41e196b145ac', 'nunc viverra dapibus nulla suscipit ligula in lacus', 'framework'), 
('e411bd80-d5cf-49ac-b847-18c9fc13377a', 'quam fringilla rhoncus mauris enim leo rhoncus sed vestibulum sit amet cursus', 'stable'), 
('e411bd80-d5cf-49ac-b847-18c9fc13377a', 'scelerisque quam turpis adipiscing lorem vitae mattis nibh ligula nec', 'User-friendly'), 
('e411bd80-d5cf-49ac-b847-18c9fc13377a', 'ullamcorper purus sit amet nulla quisque arcu libero rutrum ac lobortis', 'client-server'),
('1276b4eb-df3a-4de3-bcae-a450ed96eeac', 'Who is behind Project Kampong?', 'Project Kampong is a youth-led platform dedicated to connecting young Singaporean leaders to build social good initiatives, together. By breaking down the barriers youths face in finding ideas and/or members, Project Kampong hopes to create a more level playing field that supports youth to innovate and  pursue their passions.');

/* Participants mock data population */
insert into participant (listing_id, user_id, joined_on, end_on) values ('43824166-bee2-426e-8a08-ca2c4e4120ae', 'f96b2138-1754-4c17-a405-940e20adc601', '12/19/2018', null), 
('c975a572-452d-4824-8ed5-500b50488436', 'f96b2138-1754-4c17-a405-940e20adc601', '9/24/2018', null), 
('43824166-bee2-426e-8a08-ca2c4e4120ae', 'b7662cd1-a2c9-4054-95e7-078e35ea6fa1', '10/18/2019', null), 
('c975a572-452d-4824-8ed5-500b50488436', 'b7662cd1-a2c9-4054-95e7-078e35ea6fa1', '8/21/2018', '9/7/2020'), 
('d95a6c2e-3c33-447c-be0c-be399247dd3f', 'b7662cd1-a2c9-4054-95e7-078e35ea6fa1', '12/14/2019', '9/3/2020'), 
('43824166-bee2-426e-8a08-ca2c4e4120ae', 'd69a127d-815b-4834-b2b6-54ab398fccad', '2/22/2020', '8/10/2020'), 
('c975a572-452d-4824-8ed5-500b50488436', 'd69a127d-815b-4834-b2b6-54ab398fccad', '2/12/2020', '9/4/2020'), 
('d95a6c2e-3c33-447c-be0c-be399247dd3f', 'd69a127d-815b-4834-b2b6-54ab398fccad', '3/21/2019', '9/23/2020'), 
('cf4adc93-3b96-4bbc-8cb0-41e196b145ac', 'd69a127d-815b-4834-b2b6-54ab398fccad', '6/13/2020', null), 
('c975a572-452d-4824-8ed5-500b50488436', 'f997120c-2956-482e-9ba3-81a12b4fecc1', '7/10/2019', null), 
('d95a6c2e-3c33-447c-be0c-be399247dd3f', 'f997120c-2956-482e-9ba3-81a12b4fecc1', '7/25/2018', null), 
('e411bd80-d5cf-49ac-b847-18c9fc13377a', 'f997120c-2956-482e-9ba3-81a12b4fecc1', '2/9/2019', null);

/* Jobs mock data population */
insert into job (listing_id, job_title, job_description) values ('43824166-bee2-426e-8a08-ca2c4e4120ae', 'Account Representative I', 'Polarised next generation alliance'), 
('43824166-bee2-426e-8a08-ca2c4e4120ae', 'Project Manager', 'Ameliorated 24 hour structure'), 
('43824166-bee2-426e-8a08-ca2c4e4120ae', 'Teacher', 'Enhanced 6th generation portal'), 
('43824166-bee2-426e-8a08-ca2c4e4120ae', 'VP Accounting', 'Multi-channelled local pricing structure'), 
('43824166-bee2-426e-8a08-ca2c4e4120ae', 'Office Assistant IV', 'Vision-oriented explicit moratorium'), 
('c975a572-452d-4824-8ed5-500b50488436', 'Senior Editor', 'Devolved high-level protocol'), 
('c975a572-452d-4824-8ed5-500b50488436', 'Civil Engineer', 'Front-line optimal algorithm'), 
('c975a572-452d-4824-8ed5-500b50488436', 'Senior Quality Engineer', 'Exclusive incremental toolset'), 
('c975a572-452d-4824-8ed5-500b50488436', 'Programmer Analyst I', 'Polarised bifurcated open architecture'), 
('c975a572-452d-4824-8ed5-500b50488436', 'Paralegal', 'Networked intangible system engine'), 
('d95a6c2e-3c33-447c-be0c-be399247dd3f', 'Project Manager', 'Profound optimizing matrix'), 
('d95a6c2e-3c33-447c-be0c-be399247dd3f', 'Tax Accountant', 'Realigned grlisting_id-enabled forecast'), 
('d95a6c2e-3c33-447c-be0c-be399247dd3f', 'Software Test Engineer II', 'Right-sized 3rd generation throughput'), 
('d95a6c2e-3c33-447c-be0c-be399247dd3f', 'Teacher', 'Universal executive Graphical User Interface'), 
('d95a6c2e-3c33-447c-be0c-be399247dd3f', 'Community Outreach Specialist', 'Monitored asynchronous initiative'), 
('d95a6c2e-3c33-447c-be0c-be399247dd3f', 'Compensation Analyst', 'Universal 24 hour protocol'), 
('cf4adc93-3b96-4bbc-8cb0-41e196b145ac', 'VP Marketing', 'Inverse user-facing ability'), 
('cf4adc93-3b96-4bbc-8cb0-41e196b145ac', 'Teacher', 'Phased bottom-line encryption'), 
('e411bd80-d5cf-49ac-b847-18c9fc13377a', 'Chemical Engineer', 'Synergistic stable encryption'), 
('e411bd80-d5cf-49ac-b847-18c9fc13377a', 'Web Developer IV', 'Focused encompassing archive'), 
('e411bd80-d5cf-49ac-b847-18c9fc13377a', 'Assistant Professor', 'Public-key heuristic encryption');

/* Likes (User-Listings) mock data population */
insert into listinglike (user_id, listing_id) values ('f96b2138-1754-4c17-a405-940e20adc601', '43824166-bee2-426e-8a08-ca2c4e4120ae'), 
('f96b2138-1754-4c17-a405-940e20adc601', 'c975a572-452d-4824-8ed5-500b50488436'), 
('f96b2138-1754-4c17-a405-940e20adc601', 'e411bd80-d5cf-49ac-b847-18c9fc13377a'), 
('b7662cd1-a2c9-4054-95e7-078e35ea6fa1', '43824166-bee2-426e-8a08-ca2c4e4120ae'), 
('b7662cd1-a2c9-4054-95e7-078e35ea6fa1', 'c975a572-452d-4824-8ed5-500b50488436'), 
('b7662cd1-a2c9-4054-95e7-078e35ea6fa1', 'e411bd80-d5cf-49ac-b847-18c9fc13377a'), 
('d69a127d-815b-4834-b2b6-54ab398fccad', '43824166-bee2-426e-8a08-ca2c4e4120ae'), 
('d69a127d-815b-4834-b2b6-54ab398fccad', 'c975a572-452d-4824-8ed5-500b50488436'), 
('d69a127d-815b-4834-b2b6-54ab398fccad', 'e411bd80-d5cf-49ac-b847-18c9fc13377a'), 
('f997120c-2956-482e-9ba3-81a12b4fecc1', '43824166-bee2-426e-8a08-ca2c4e4120ae'), 
('f997120c-2956-482e-9ba3-81a12b4fecc1', 'c975a572-452d-4824-8ed5-500b50488436'), 
('f997120c-2956-482e-9ba3-81a12b4fecc1', 'e411bd80-d5cf-49ac-b847-18c9fc13377a'), 
('2e9c26a0-7c1c-49d1-8c78-3a0545ca22eb', 'c975a572-452d-4824-8ed5-500b50488436');

/* HashTags mock data population */
insert into hashtag (listing_id, tag) values ('43824166-bee2-426e-8a08-ca2c4e4120ae', '#broker0'), 
('43824166-bee2-426e-8a08-ca2c4e4120ae', '#sandyfirth1'), 
('43824166-bee2-426e-8a08-ca2c4e4120ae', '#tudhope2'), 
('c975a572-452d-4824-8ed5-500b50488436', '#slatford3'), 
('c975a572-452d-4824-8ed5-500b50488436', '#clissell4'), 
('c975a572-452d-4824-8ed5-500b50488436', '#bateup5'), 
('d95a6c2e-3c33-447c-be0c-be399247dd3f', '#smallcomb6'), 
('d95a6c2e-3c33-447c-be0c-be399247dd3f', '#wyrall7'), 
('cf4adc93-3b96-4bbc-8cb0-41e196b145ac', '#boteman8'), 
('cf4adc93-3b96-4bbc-8cb0-41e196b145ac', '#joontjes9'), 
('e411bd80-d5cf-49ac-b847-18c9fc13377a', '#baudina'),
('1276b4eb-df3a-4de3-bcae-a450ed96eeac', '#kampong'),
('1276b4eb-df3a-4de3-bcae-a450ed96eeac', '#socialgood'),
('1276b4eb-df3a-4de3-bcae-a450ed96eeac', '#initiative');

/* Milestones mock data population */
insert into milestone (listing_id, milestone_description, date) values ('43824166-bee2-426e-8a08-ca2c4e4120ae', 'De-engineered content-based solution', '2019-06-01 11:27:43'), 
('43824166-bee2-426e-8a08-ca2c4e4120ae', 'Centralized stable groupware', '2020-07-09 11:30:19'), 
('c975a572-452d-4824-8ed5-500b50488436', 'Future-proofed systemic interface', '2016-11-13 21:27:33'), 
('c975a572-452d-4824-8ed5-500b50488436', 'Pre-emptive static installation', '2015-08-06 09:28:56'), 
('c975a572-452d-4824-8ed5-500b50488436', 'Multi-channelled secondary model', '2016-12-04 03:14:39'), 
('d95a6c2e-3c33-447c-be0c-be399247dd3f', 'Intuitive client-driven knowledge user', '2018-12-16 08:49:35'), 
('d95a6c2e-3c33-447c-be0c-be399247dd3f', 'Monitored attitude-oriented array', '2017-11-23 11:53:21'), 
('cf4adc93-3b96-4bbc-8cb0-41e196b145ac', 'Monitored object-oriented access', '2020-01-21 19:04:19'), 
('e411bd80-d5cf-49ac-b847-18c9fc13377a', 'Managed attitude-oriented frame', '2020-02-12 22:30:42'),
('1276b4eb-df3a-4de3-bcae-a450ed96eeac', 'Profile Listing', '2020-08-21 16:00:00'),
('1276b4eb-df3a-4de3-bcae-a450ed96eeac', 'Location', '2020-09-18 16:00:00'),
('1276b4eb-df3a-4de3-bcae-a450ed96eeac', 'One-Pager Template for Project Listing Platform', '2020-08-07 16:00:00'),
('1276b4eb-df3a-4de3-bcae-a450ed96eeac', 'Project Browsing and Filtering', '2020-07-31 16:00:00'),
('1276b4eb-df3a-4de3-bcae-a450ed96eeac', 'Individual Portfolio Dashboard', '2020-08-14 16:00:00'),
('1276b4eb-df3a-4de3-bcae-a450ed96eeac', 'Project- Profile Matching & Recommendation', '2020-11-30 16:00:00'),
('1276b4eb-df3a-4de3-bcae-a450ed96eeac', 'On-Platform Chat', '2020-10-31 16:00:00');

/* ListingAdmins mock data population */
insert into listingadmin (user_id, listing_id) values ('d69a127d-815b-4834-b2b6-54ab398fccad', '43824166-bee2-426e-8a08-ca2c4e4120ae'), 
('d69a127d-815b-4834-b2b6-54ab398fccad', 'c975a572-452d-4824-8ed5-500b50488436'), 
('f997120c-2956-482e-9ba3-81a12b4fecc1', '43824166-bee2-426e-8a08-ca2c4e4120ae'), 
('f997120c-2956-482e-9ba3-81a12b4fecc1', 'd95a6c2e-3c33-447c-be0c-be399247dd3f'), 
('f997120c-2956-482e-9ba3-81a12b4fecc1', 'c975a572-452d-4824-8ed5-500b50488436'), 
('2e9c26a0-7c1c-49d1-8c78-3a0545ca22eb', 'd95a6c2e-3c33-447c-be0c-be399247dd3f');

insert into listingupdate (listing_id, listing_update_description, pics, created_on, updated_on) values ('43824166-bee2-426e-8a08-ca2c4e4120ae', 'Horizontal dynamic encoding', ARRAY['https://robohash.org/utetut.bmp?size=500x500&set=set1', 'https://robohash.org/quiserrorlabore.jpg?size=500x500&set=set1', 'https://robohash.org/aspernaturcupiditateerror.png?size=500x500&set=set1', 'https://robohash.org/dolorevenietmaiores.jpg?size=500x500&set=set1', 'https://robohash.org/utconsequaturatque.bmp?size=500x500&set=set1'], '2020-05-05 02:20:02', '2020-04-28 01:06:06'), 
('43824166-bee2-426e-8a08-ca2c4e4120ae', 'Inverse eco-centric conglomeration', ARRAY['https://robohash.org/sititaqueiure.jpg?size=500x500&set=set1', 'https://robohash.org/facilisimpeditsoluta.bmp?size=500x500&set=set1', 'https://robohash.org/atquererumvoluptatem.jpg?size=500x500&set=set1', 'https://robohash.org/quietreprehenderit.bmp?size=500x500&set=set1', 'https://robohash.org/suscipittemporeet.png?size=500x500&set=set1'], '2020-07-08 12:26:55', '2020-08-10 10:06:35'), 
('c975a572-452d-4824-8ed5-500b50488436', 'Persistent regional open system', ARRAY['https://robohash.org/sedaspernaturomnis.bmp?size=500x500&set=set1', 'https://robohash.org/autdeseruntdolorem.bmp?size=500x500&set=set1', 'https://robohash.org/autnumquamitaque.png?size=500x500&set=set1', 'https://robohash.org/molestiaefacereautem.bmp?size=500x500&set=set1'], '2019-11-17 10:37:58', '2020-04-17 07:43:37'), 
('c975a572-452d-4824-8ed5-500b50488436', 'Intuitive secondary complexity', ARRAY['https://robohash.org/nihildolorqui.png?size=500x500&set=set1', 'https://robohash.org/quieiusquo.jpg?size=500x500&set=set1', 'https://robohash.org/quidemquibusdamquia.bmp?size=500x500&set=set1'], '2019-03-26 14:42:40', '2019-11-08 21:10:46'), 
('c975a572-452d-4824-8ed5-500b50488436', 'Phased reciprocal parallelism', ARRAY['https://robohash.org/providentdolorrecusandae.png?size=500x500&set=set1', 'https://robohash.org/consequaturabalias.png?size=500x500&set=set1', 'https://robohash.org/enimnobisconsequatur.jpg?size=500x500&set=set1', 'https://robohash.org/sedfacerepraesentium.bmp?size=500x500&set=set1', 'https://robohash.org/perferendisaniminesciunt.jpg?size=500x500&set=set1'], '2019-04-07 14:09:54', '2020-03-05 03:18:07'), 
('d95a6c2e-3c33-447c-be0c-be399247dd3f', 'Enterprise-wide leading edge productivity', ARRAY['https://robohash.org/aliasetest.jpg?size=500x500&set=set1', 'https://robohash.org/necessitatibusimpeditmodi.jpg?size=500x500&set=set1', 'https://robohash.org/assumendasiteligendi.bmp?size=500x500&set=set1', 'https://robohash.org/quiasuntassumenda.bmp?size=500x500&set=set1'], '2020-06-03 08:49:01', '2019-08-20 09:01:49'), 
('cf4adc93-3b96-4bbc-8cb0-41e196b145ac', 'Business-focused multi-state productivity', ARRAY['https://robohash.org/doloresisteblanditiis.jpg?size=500x500&set=set1', 'https://robohash.org/suntveroet.jpg?size=500x500&set=set1', 'https://robohash.org/quosquorerum.bmp?size=500x500&set=set1', 'https://robohash.org/sitmollitiaipsa.jpg?size=500x500&set=set1', 'https://robohash.org/esseexincidunt.bmp?size=500x500&set=set1'], '2020-04-19 07:13:44', '2020-07-17 21:39:35');

/* ListingComments data population */
insert into listingcomment (listing_id, user_id, comment, reply_to_id, created_on, updated_on) values ('43824166-bee2-426e-8a08-ca2c4e4120ae', 'f96b2138-1754-4c17-a405-940e20adc601', 'strategize 24/365 users', null, '2020-03-04 10:03:23', '2020-08-30 20:09:10'), 
('c975a572-452d-4824-8ed5-500b50488436', 'f96b2138-1754-4c17-a405-940e20adc601', 'visualize dot-com solutions', null, '2020-02-25 17:57:48', '2020-07-28 21:38:30'), 
('43824166-bee2-426e-8a08-ca2c4e4120ae', 'f96b2138-1754-4c17-a405-940e20adc601', 'revolutionize out-of-the-box interfaces', 1, '2019-11-24 04:26:00', '2020-08-04 02:55:30'), 
('c975a572-452d-4824-8ed5-500b50488436', 'b7662cd1-a2c9-4054-95e7-078e35ea6fa1', 'benchmark web-enabled experiences', null, '2019-10-18 14:46:56', '2020-07-17 21:51:32'), 
('d95a6c2e-3c33-447c-be0c-be399247dd3f', 'b7662cd1-a2c9-4054-95e7-078e35ea6fa1', 'mesh 24/365 supply-chains', null, '2020-02-21 04:58:36', '2020-03-01 07:21:38'), 
('c975a572-452d-4824-8ed5-500b50488436', 'b7662cd1-a2c9-4054-95e7-078e35ea6fa1', 'scale robust platforms', 4, '2020-01-23 14:20:13', '2020-06-23 14:17:43'), 
('d95a6c2e-3c33-447c-be0c-be399247dd3f', 'd69a127d-815b-4834-b2b6-54ab398fccad', 'incubate leading-edge partnerships', null, '2020-08-20 23:56:14', '2019-10-08 17:00:24'), 
('43824166-bee2-426e-8a08-ca2c4e4120ae', 'd69a127d-815b-4834-b2b6-54ab398fccad', 'harness viral web services', 3, '2019-11-17 06:38:44', '2019-12-10 18:58:28'), 
('cf4adc93-3b96-4bbc-8cb0-41e196b145ac', 'd69a127d-815b-4834-b2b6-54ab398fccad', 'whiteboard best-of-breed deliverables', null, '2020-03-29 17:51:13', '2019-11-09 01:45:40'), 
('c975a572-452d-4824-8ed5-500b50488436', 'd69a127d-815b-4834-b2b6-54ab398fccad', 'deliver frictionless infrastructures', 2, '2019-10-30 00:32:01', '2020-04-27 21:18:40'), 
('43824166-bee2-426e-8a08-ca2c4e4120ae', 'f997120c-2956-482e-9ba3-81a12b4fecc1', 'recontextualize leading-edge networks', 3, '2020-06-24 21:21:47', '2020-06-21 01:48:47'), 
('43824166-bee2-426e-8a08-ca2c4e4120ae', 'f997120c-2956-482e-9ba3-81a12b4fecc1', 'orchestrate intuitive deliverables', 11, '2019-10-05 15:40:48', '2020-06-08 19:49:10'), 
('cf4adc93-3b96-4bbc-8cb0-41e196b145ac', 'f997120c-2956-482e-9ba3-81a12b4fecc1', 'orchestrate high achieving ROI', null, '2020-04-02 05:24:48', '2019-12-27 16:54:38'), 
('e411bd80-d5cf-49ac-b847-18c9fc13377a', 'f997120c-2956-482e-9ba3-81a12b4fecc1', 'brand end-to-end web services', null, '2020-05-23 01:54:34', '2020-06-20 12:56:02'), 
('43824166-bee2-426e-8a08-ca2c4e4120ae', 'f997120c-2956-482e-9ba3-81a12b4fecc1', 'grow integrated systems', 11, '2020-05-15 20:35:48', '2019-11-08 04:23:03'), 
('43824166-bee2-426e-8a08-ca2c4e4120ae', '2e9c26a0-7c1c-49d1-8c78-3a0545ca22eb', 'implement innovative platforms', 11, '2020-06-17 09:31:57', '2020-07-06 02:43:45');

/* ListingLocations */
insert into listinglocation (listing_id, location_id) values ('43824166-bee2-426e-8a08-ca2c4e4120ae', 1), 
('43824166-bee2-426e-8a08-ca2c4e4120ae', 2), 
('43824166-bee2-426e-8a08-ca2c4e4120ae', 3), 
('c975a572-452d-4824-8ed5-500b50488436', 3), 
('d95a6c2e-3c33-447c-be0c-be399247dd3f', 3), 
('cf4adc93-3b96-4bbc-8cb0-41e196b145ac', 3), 
('c975a572-452d-4824-8ed5-500b50488436', 4), 
('cf4adc93-3b96-4bbc-8cb0-41e196b145ac', 4);

/* Organisations */
insert into organisation (organisation_id, name, organisation_type, about, website_url, phone, email, address, owned_by, locations, story, facebook_link, twitter_link, instagram_link, banner_photo, profile_photo) values ('8426a370-280e-11eb-aa97-9d0bb1a7de0d', 'Shuffledrive', 'Consultancy', 'Distributed 4th generation forecast', 'microsoft.com', '8765378253', 'mallgood0@slideshare.net', '322 Tampines Ave 4 #01-23', '2e9c26a0-7c1c-49d1-8c78-3a0545ca22eb', null, 'Multi-layered regional framework', 'http://dailymail.co.uk/fusce/congue.xml', 'https://reverbnation.com/justo/in/hac/habitasse/platea.json', 'http://telegraph.co.uk/proin/at/turpis/a/pede.html', 'http://dummyimage.com/1782x2466.png/5fa2dd/ffffff', 'http://dummyimage.com/552x628.jpg/cc0000/ffffff'),
('91d4aee0-280e-11eb-aa97-9d0bb1a7de0d', 'Thoughtmix', 'Sponsor', 'Decentralized empowering artificial intelligence', null, '7578453922', 'lspeers1@reddit.com', '322 Tampines Ave 4 #01-23', '2e9c26a0-7c1c-49d1-8c78-3a0545ca22eb', ARRAY['Tampines','Simei'], 'Open-architected empowering toolset', 'https://tuttocitta.it/pellentesque/at.js', 'http://yahoo.com/semper/rutrum/nulla/nunc/purus.png', 'http://addtoany.com/luctus/tincidunt/nulla/mollis/molestie/lorem/quisque.json', 'http://dummyimage.com/2287x1861.jpg/5fa2dd/ffffff', 'http://dummyimage.com/531x557.bmp/5fa2dd/ffffff'),
('98897310-280e-11eb-aa97-9d0bb1a7de0d', 'Gabvine', 'Consultancy', 'Synchronised next generation concept', 'apache.org', '7364748602', 'bbenton2@miibeian.gov.cn', '322 Tampines Ave 4 #01-23', '2e9c26a0-7c1c-49d1-8c78-3a0545ca22eb', ARRAY['Tampines','Simei'], 'Balanced tangible leverage', 'https://linkedin.com/vivamus/vel/nulla/eget.jsp', 'https://cornell.edu/eget/congue/eget/semper/rutrum/nulla.xml', 'https://jigsy.com/tristique/fusce.html', 'http://dummyimage.com/1918x1478.jpg/dddddd/000000', 'http://dummyimage.com/740x934.jpg/ff4444/ffffff'),
('a689bd30-280e-11eb-aa97-9d0bb1a7de0d', 'Skalith', null, 'Compatible content-based secured line', 'boston.com', null, 'arender3@discuz.net', '322 Tampines Ave 4 #01-23', '2e9c26a0-7c1c-49d1-8c78-3a0545ca22eb', ARRAY['Tampines','Simei'], null, 'https://newyorker.com/ornare/imperdiet/sapien/urna/pretium/nisl.png', 'http://paginegialle.it/luctus/et/ultrices/posuere/cubilia/curae.png', 'https://qq.com/luctus/cum/sociis/natoque/penatibus/et.jpg', 'http://dummyimage.com/1778x1700.jpg/5fa2dd/ffffff', 'http://dummyimage.com/875x251.png/dddddd/000000'),
('acde6000-280e-11eb-aa97-9d0bb1a7de0d', 'Avaveo', 'Government', 'Customer-focused leading edge customer loyalty', null, '1995709220', 'tmarskell4@smh.com.au', '322 Tampines Ave 4 #01-23', '2e9c26a0-7c1c-49d1-8c78-3a0545ca22eb', ARRAY['Tampines','Simei'], 'Assimilated multi-state ability', 'http://ebay.com/volutpat/eleifend/donec/ut/dolor.xml', 'https://sakura.ne.jp/odio/porttitor/id/consequat/in/consequat/ut.js', 'https://bigcartel.com/pretium/quis/lectus/suspendisse/potenti/in.html', 'http://dummyimage.com/1752x1563.png/5fa2dd/ffffff', 'http://dummyimage.com/950x972.png/5fa2dd/ffffff'),
('b2be4800-280e-11eb-aa97-9d0bb1a7de0d', 'Innotype', 'Government', 'Networked asynchronous neural-net', 'barnesandnoble.com', '9674796018', 'ccusick5@uiuc.edu', '322 Tampines Ave 4 #01-23', '2e9c26a0-7c1c-49d1-8c78-3a0545ca22eb', ARRAY['Tampines','Simei'], 'Seamless multi-tasking archive', 'http://cisco.com/ipsum/dolor/sit.png', 'http://miibeian.gov.cn/sit/amet/cursus/id/turpis/integer/aliquet.aspx', 'http://altervista.org/cras/mi/pede.aspx', 'http://dummyimage.com/2284x1036.jpg/5fa2dd/ffffff', 'http://dummyimage.com/941x698.bmp/cc0000/ffffff'),
('b7eb5ac0-280e-11eb-aa97-9d0bb1a7de0d', 'Browsezoom', 'Sponsor', 'Decentralized systemic attitude', null, '7856198648', 'sstoneley6@google.com.br', '322 Tampines Ave 4 #01-23', 'b7662cd1-a2c9-4054-95e7-078e35ea6fa1', ARRAY['Tampines','Simei'], 'Optional analyzing customer loyalty', 'http://prweb.com/pretium/nisl/ut/volutpat/sapien/arcu/sed.jpg', 'https://ftc.gov/nibh/in/hac.js', 'https://wiley.com/quis/augue/luctus/tincidunt.xml', 'http://dummyimage.com/1930x1683.jpg/5fa2dd/ffffff', 'http://dummyimage.com/914x299.bmp/ff4444/ffffff'),
('bdfb2c60-280e-11eb-aa97-9d0bb1a7de0d', 'Wikido', null, 'Integrated high-level circuit', null, null, 'rvowels7@shinystat.com', '322 Tampines Ave 4 #01-23', 'b7662cd1-a2c9-4054-95e7-078e35ea6fa1', ARRAY['Tampines','Simei'], null, 'http://cnn.com/arcu/sed/augue/aliquam/erat/volutpat/in.html', 'http://google.es/felis/donec/semper/sapien.html', 'http://youtube.com/lectus/pellentesque/eget.js', 'http://dummyimage.com/1425x1147.bmp/dddddd/000000', 'http://dummyimage.com/465x597.bmp/ff4444/ffffff'),
('c37092c0-280e-11eb-aa97-9d0bb1a7de0d', 'Teklist', 'Charity', 'Programmable real-time customer loyalty', 'purevolume.com', '5968240238', 'ksaltmarsh8@loc.gov', '322 Tampines Ave 4 #01-23', 'd69a127d-815b-4834-b2b6-54ab398fccad', ARRAY['Tampines','Simei'], 'Team-oriented human-resource artificial intelligence', 'http://fc2.com/risus.png', 'https://cargocollective.com/ultrices/erat/tortor/sollicitudin/mi/sit/amet.html', 'http://chron.com/dignissim/vestibulum.js', 'http://dummyimage.com/2026x2145.bmp/5fa2dd/ffffff', 'http://dummyimage.com/439x655.bmp/dddddd/000000'),
('c91609d0-280e-11eb-aa97-9d0bb1a7de0d', 'Twinder', 'MNC', 'Operative attitude-oriented array', null, '6589137746', 'teyam9@yale.edu', '322 Tampines Ave 4 #01-23', 'd69a127d-815b-4834-b2b6-54ab398fccad', ARRAY['Tampines','Simei'], 'Virtual directional groupware', 'https://hugedomains.com/odio/condimentum/id/luctus.png', 'http://mozilla.com/vivamus/in/felis/eu.png', 'http://amazonaws.com/a/pede.png', 'http://dummyimage.com/1495x1581.png/cc0000/ffffff', 'http://dummyimage.com/997x524.bmp/5fa2dd/ffffff'),
('d373ffe0-280e-11eb-aa97-9d0bb1a7de0d', 'Flashdog', 'MNC', 'Quality-focused impactful pricing structure', null, '3878301489', 'cwhitlama@macromedia.com', '322 Tampines Ave 4 #01-23', 'f96b2138-1754-4c17-a405-940e20adc601', ARRAY['Tampines','Simei'], 'Team-oriented modular core', 'http://sogou.com/dolor/quis/odio/consequat/varius.html', 'https://harvard.edu/odio/odio/elementum.html', 'https://blogs.com/diam/in.jpg', 'http://dummyimage.com/1923x1835.png/5fa2dd/ffffff', 'http://dummyimage.com/640x336.png/5fa2dd/ffffff'),
('dab21850-280e-11eb-aa97-9d0bb1a7de0d', 'Chatterpoint', null, 'Re-engineered system-worthy capability', 'nih.gov', null, 'cweekeb@webeden.co.uk', '322 Tampines Ave 4 #01-23', 'f96b2138-1754-4c17-a405-940e20adc601', ARRAY['Tampines','Simei'], null, 'https://feedburner.com/id/lobortis.js', 'http://java.com/massa/id/nisl.xml', 'https://tripod.com/lectus.xml', 'http://dummyimage.com/2042x1616.bmp/ff4444/ffffff', 'http://dummyimage.com/842x370.bmp/5fa2dd/ffffff'),
('e00fb0f0-280e-11eb-aa97-9d0bb1a7de0d', 'Fatz', 'MNC', 'Decentralized modular hierarchy', 'intel.com', '3032094893', 'tsessionsc@eventbrite.com', null, 'f96b2138-1754-4c17-a405-940e20adc601', ARRAY['Tampines','Simei'], 'User-centric discrete complexity', 'https://phpbb.com/morbi/quis/tortor/id/nulla.aspx', 'https://mayoclinic.com/vulputate/elementum/nullam/varius/nulla/facilisi/cras.jsp', 'http://furl.net/maecenas/leo/odio/condimentum/id/luctus.js', 'http://dummyimage.com/1447x1959.jpg/dddddd/000000', 'http://dummyimage.com/912x945.jpg/cc0000/ffffff'),
('e9d2eda0-280e-11eb-aa97-9d0bb1a7de0d', 'Topicshots', 'Government', 'Face to face zero tolerance knowledge user', 'toplist.cz', '7078286517', 'nharmantd@gnu.org', null, 'f96b2138-1754-4c17-a405-940e20adc601', ARRAY['Tampines','Simei'], 'Total maximized encoding', null, null, null, null, null);

insert into programme (organisation_id, programme_title, about, media_url) values ('8426a370-280e-11eb-aa97-9d0bb1a7de0d', 'Innovative object-oriented utilisation', 'Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.', null), 
('8426a370-280e-11eb-aa97-9d0bb1a7de0d', 'Proactive actuating Graphic Interface', 'Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.

Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.

Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.', null), 
('8426a370-280e-11eb-aa97-9d0bb1a7de0d', 'Multi-lateral human-resource software', 'Sed ante. Vivamus tortor. Duis mattis egestas metus.

Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.

Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.', ARRAY['https://youtube.com','https://instagram.com']), 
('8426a370-280e-11eb-aa97-9d0bb1a7de0d', 'Universal heuristic implementation', 'Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.', ARRAY['https://youtube.com','https://instagram.com']), 
('91d4aee0-280e-11eb-aa97-9d0bb1a7de0d', 'Open-source composite neural-net', 'Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.

Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.', ARRAY['https://youtube.com','https://instagram.com']), 
('91d4aee0-280e-11eb-aa97-9d0bb1a7de0d', 'Optimized heuristic leverage', 'Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.

Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.

In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.', ARRAY['https://youtube.com','https://instagram.com']), 
('91d4aee0-280e-11eb-aa97-9d0bb1a7de0d', 'Synchronised local superstructure', 'Sed ante. Vivamus tortor. Duis mattis egestas metus.', ARRAY['https://youtube.com','https://instagram.com']), 
('98897310-280e-11eb-aa97-9d0bb1a7de0d', 'Virtual bi-directional alliance', 'Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.', ARRAY['https://youtube.com','https://instagram.com']), 
('98897310-280e-11eb-aa97-9d0bb1a7de0d', 'Multi-tiered global Graphical User Interface', 'Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.

Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.

Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.', null), 
('a689bd30-280e-11eb-aa97-9d0bb1a7de0d', 'Fully-configurable context-sensitive productivity', 'Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.', null), 
('a689bd30-280e-11eb-aa97-9d0bb1a7de0d', 'Operative asynchronous ability', 'Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.', ARRAY['https://youtube.com','https://instagram.com']), 
('a689bd30-280e-11eb-aa97-9d0bb1a7de0d', 'Networked asymmetric analyzer', 'Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.', null), 
('a689bd30-280e-11eb-aa97-9d0bb1a7de0d', 'Monitored explicit local area network', 'Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.

Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.', null), 
('b2be4800-280e-11eb-aa97-9d0bb1a7de0d', 'Virtual homogeneous Graphic Interface', 'Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.

Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.', ARRAY['https://youtube.com','https://instagram.com']), 
('b2be4800-280e-11eb-aa97-9d0bb1a7de0d', 'Devolved 4th generation conglomeration', 'Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.', ARRAY['https://youtube.com','https://instagram.com']), 
('b2be4800-280e-11eb-aa97-9d0bb1a7de0d', 'Quality-focused background definition', 'Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.

Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.

Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.', ARRAY['https://youtube.com','https://instagram.com']), 
('b7eb5ac0-280e-11eb-aa97-9d0bb1a7de0d', 'Inverse full-range extranet', 'Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.

Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.', ARRAY['https://youtube.com','https://instagram.com']), 
('b7eb5ac0-280e-11eb-aa97-9d0bb1a7de0d', 'Virtual context-sensitive core', 'Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.

Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.', null), 
('bdfb2c60-280e-11eb-aa97-9d0bb1a7de0d', 'Public-key even-keeled migration', 'Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.

Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.', ARRAY['https://youtube.com','https://instagram.com']), 
('bdfb2c60-280e-11eb-aa97-9d0bb1a7de0d', 'Distributed client-server installation', 'Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.

Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.

Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.', ARRAY['https://youtube.com','https://instagram.com']), 
('bdfb2c60-280e-11eb-aa97-9d0bb1a7de0d', 'Function-based impactful protocol', 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus. Praesent lectus.

Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.

Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.', ARRAY['https://youtube.com','https://instagram.com']), 
('c37092c0-280e-11eb-aa97-9d0bb1a7de0d', 'User-friendly uniform knowledge base', 'Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.', ARRAY['https://youtube.com','https://instagram.com']), 
('c37092c0-280e-11eb-aa97-9d0bb1a7de0d', 'Stand-alone grid-enabled encryption', 'Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.', ARRAY['https://youtube.com','https://instagram.com']), 
('c37092c0-280e-11eb-aa97-9d0bb1a7de0d', 'Monitored mobile utilisation', 'Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.

Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.', ARRAY['https://youtube.com','https://instagram.com']), 
('c91609d0-280e-11eb-aa97-9d0bb1a7de0d', 'Versatile explicit extranet', 'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.

Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.', null), 
('c91609d0-280e-11eb-aa97-9d0bb1a7de0d', 'Open-architected 24 hour function', 'Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.

Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.', ARRAY['https://youtube.com','https://instagram.com']), 
('c91609d0-280e-11eb-aa97-9d0bb1a7de0d', 'Persevering tangible framework', 'Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.

In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.

Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.', ARRAY['https://youtube.com','https://instagram.com']);

INSERT INTO listingorganisation ("listing_id", "organisation_id") VALUES ('43824166-bee2-426e-8a08-ca2c4e4120ae', '8426a370-280e-11eb-aa97-9d0bb1a7de0d'),
('43824166-bee2-426e-8a08-ca2c4e4120ae', '91d4aee0-280e-11eb-aa97-9d0bb1a7de0d'),
('43824166-bee2-426e-8a08-ca2c4e4120ae', '98897310-280e-11eb-aa97-9d0bb1a7de0d'),
('43824166-bee2-426e-8a08-ca2c4e4120ae', 'a689bd30-280e-11eb-aa97-9d0bb1a7de0d'),
('c975a572-452d-4824-8ed5-500b50488436', 'acde6000-280e-11eb-aa97-9d0bb1a7de0d'),
('cf4adc93-3b96-4bbc-8cb0-41e196b145ac', 'b2be4800-280e-11eb-aa97-9d0bb1a7de0d'),
('d95a6c2e-3c33-447c-be0c-be399247dd3f', 'b7eb5ac0-280e-11eb-aa97-9d0bb1a7de0d'),
('e411bd80-d5cf-49ac-b847-18c9fc13377a', 'bdfb2c60-280e-11eb-aa97-9d0bb1a7de0d'),
('e411bd80-d5cf-49ac-b847-18c9fc13377a', 'c37092c0-280e-11eb-aa97-9d0bb1a7de0d'),
('e411bd80-d5cf-49ac-b847-18c9fc13377a', 'c91609d0-280e-11eb-aa97-9d0bb1a7de0d');

INSERT INTO membership (organisation_id, user_id, is_owner, joined_on) VALUES ('8426a370-280e-11eb-aa97-9d0bb1a7de0d', '2e9c26a0-7c1c-49d1-8c78-3a0545ca22eb', TRUE, '2020-08-21 04:50:15.047753'),
('8426a370-280e-11eb-aa97-9d0bb1a7de0d', 'b7662cd1-a2c9-4054-95e7-078e35ea6fa1', FALSE, '2020-08-22 04:50:15.047753'),
('91d4aee0-280e-11eb-aa97-9d0bb1a7de0d', 'b7662cd1-a2c9-4054-95e7-078e35ea6fa1', FALSE, '2020-08-25 04:50:15.047753'),
('91d4aee0-280e-11eb-aa97-9d0bb1a7de0d', 'd69a127d-815b-4834-b2b6-54ab398fccad', TRUE, '2020-08-22 04:50:15.047753'),
('98897310-280e-11eb-aa97-9d0bb1a7de0d', 'f96b2138-1754-4c17-a405-940e20adc601', TRUE, '2020-08-22 04:50:15.047753'),
('a689bd30-280e-11eb-aa97-9d0bb1a7de0d', 'f997120c-2956-482e-9ba3-81a12b4fecc1', TRUE, '2020-08-22 04:50:15.047753');

INSERT INTO organisationlike (organisation_id, user_id) VALUES ('8426a370-280e-11eb-aa97-9d0bb1a7de0d', '2e9c26a0-7c1c-49d1-8c78-3a0545ca22eb'),
('8426a370-280e-11eb-aa97-9d0bb1a7de0d', 'b7662cd1-a2c9-4054-95e7-078e35ea6fa1'),
('91d4aee0-280e-11eb-aa97-9d0bb1a7de0d', 'b7662cd1-a2c9-4054-95e7-078e35ea6fa1'),
('91d4aee0-280e-11eb-aa97-9d0bb1a7de0d', 'd69a127d-815b-4834-b2b6-54ab398fccad'),
('98897310-280e-11eb-aa97-9d0bb1a7de0d', 'f96b2138-1754-4c17-a405-940e20adc601'),
('a689bd30-280e-11eb-aa97-9d0bb1a7de0d', 'f997120c-2956-482e-9ba3-81a12b4fecc1');

insert into organisationjob (organisation_id, organisation_job_title, organisation_job_description) values 
('e9d2eda0-280e-11eb-aa97-9d0bb1a7de0d', 'Project Manager', 'Ameliorated 24 hour structure'), 
('e9d2eda0-280e-11eb-aa97-9d0bb1a7de0d', 'Teacher', 'Enhanced 6th generation portal'), 
('a689bd30-280e-11eb-aa97-9d0bb1a7de0d', 'VP Accounting', 'Multi-channelled local pricing structure'), 
('98897310-280e-11eb-aa97-9d0bb1a7de0d', 'Office Assistant IV', 'Vision-oriented explicit moratorium'), 
('e00fb0f0-280e-11eb-aa97-9d0bb1a7de0d', 'Senior Editor', 'Devolved high-level protocol'), 
('acde6000-280e-11eb-aa97-9d0bb1a7de0d', 'Civil Engineer', 'Front-line optimal algorithm'), 
('e00fb0f0-280e-11eb-aa97-9d0bb1a7de0d', 'Senior Quality Engineer', 'Exclusive incremental toolset'), 
('e00fb0f0-280e-11eb-aa97-9d0bb1a7de0d', 'Programmer Analyst I', 'Polarised bifurcated open architecture'), 
('e00fb0f0-280e-11eb-aa97-9d0bb1a7de0d', 'Paralegal', 'Networked intangible system engine'), 
('dab21850-280e-11eb-aa97-9d0bb1a7de0d', 'Project Manager', 'Profound optimizing matrix'), 
('dab21850-280e-11eb-aa97-9d0bb1a7de0d', 'Tax Accountant', 'Realigned grlisting_id-enabled forecast'), 
('dab21850-280e-11eb-aa97-9d0bb1a7de0d', 'Software Test Engineer II', 'Right-sized 3rd generation throughput'), 
('dab21850-280e-11eb-aa97-9d0bb1a7de0d', 'Teacher', 'Universal executive Graphical User Interface'), 
('d373ffe0-280e-11eb-aa97-9d0bb1a7de0d', 'Community Outreach Specialist', 'Monitored asynchronous initiative'), 
('d373ffe0-280e-11eb-aa97-9d0bb1a7de0d', 'Compensation Analyst', 'Universal 24 hour protocol'), 
('c91609d0-280e-11eb-aa97-9d0bb1a7de0d', 'VP Marketing', 'Inverse user-facing ability'), 
('c37092c0-280e-11eb-aa97-9d0bb1a7de0d', 'Teacher', 'Phased bottom-line encryption'), 
('bdfb2c60-280e-11eb-aa97-9d0bb1a7de0d', 'Chemical Engineer', 'Synergistic stable encryption'), 
('8426a370-280e-11eb-aa97-9d0bb1a7de0d', 'Web Developer IV', 'Focused encompassing archive'), 
('91d4aee0-280e-11eb-aa97-9d0bb1a7de0d', 'Assistant Professor', 'Public-key heuristic encryption'),
('91d4aee0-280e-11eb-aa97-9d0bb1a7de0d', 'Account Representative I', 'Polarised next generation alliance');

insert into organisationannouncement (organisation_id, announcement, created_on, updated_on) values 
('e9d2eda0-280e-11eb-aa97-9d0bb1a7de0d', 'Project Manager', '2020-08-22 04:50:15.047753', '2020-08-22 04:50:15.047753'), 
('e9d2eda0-280e-11eb-aa97-9d0bb1a7de0d', 'Teacher', '2020-08-23 04:50:15.047753', '2020-08-23 04:50:15.047753'), 
('a689bd30-280e-11eb-aa97-9d0bb1a7de0d', 'VP Accounting', '2020-08-22 04:50:15.047753', '2020-08-22 04:50:15.047753'), 
('98897310-280e-11eb-aa97-9d0bb1a7de0d', 'Office Assistant IV', '2020-08-22 04:50:15.047753', '2020-08-22 04:50:15.047753'), 
('e00fb0f0-280e-11eb-aa97-9d0bb1a7de0d', 'Senior Editor', '2020-08-22 04:50:15.047753', '2020-08-22 04:50:15.047753'), 
('acde6000-280e-11eb-aa97-9d0bb1a7de0d', 'Civil Engineer', '2020-08-22 04:50:15.047753', '2020-08-22 04:50:15.047753'), 
('e00fb0f0-280e-11eb-aa97-9d0bb1a7de0d', 'Senior Quality Engineer', '2020-08-22 04:50:15.047753', '2020-08-22 04:50:15.047753'), 
('e00fb0f0-280e-11eb-aa97-9d0bb1a7de0d', 'Programmer Analyst I', '2020-08-24 04:50:15.047753', '2020-08-24 04:50:15.047753'), 
('e00fb0f0-280e-11eb-aa97-9d0bb1a7de0d', 'Paralegal', '2020-08-21 04:50:15.047753', '2020-08-25 04:50:15.047753'), 
('dab21850-280e-11eb-aa97-9d0bb1a7de0d', 'Project Manager', '2020-08-22 04:50:15.047753', '2020-08-22 04:50:15.047753'), 
('dab21850-280e-11eb-aa97-9d0bb1a7de0d', 'Tax Accountant', '2020-08-21 04:50:15.047753', '2020-08-23 04:50:15.047753'), 
('dab21850-280e-11eb-aa97-9d0bb1a7de0d', 'Software Test Engineer II', '2020-08-22 04:50:15.047753', '2020-08-24 04:50:15.047753'), 
('dab21850-280e-11eb-aa97-9d0bb1a7de0d', 'Teacher', '2020-08-25 04:50:15.047753', '2020-08-25 04:50:15.047753'), 
('d373ffe0-280e-11eb-aa97-9d0bb1a7de0d', 'Community Outreach Specialist', '2020-08-22 04:50:15.047753', '2020-08-22 04:50:15.047753'), 
('d373ffe0-280e-11eb-aa97-9d0bb1a7de0d', 'Compensation Analyst', '2020-08-22 04:50:15.047753', '2020-08-23 04:50:15.047753'), 
('c91609d0-280e-11eb-aa97-9d0bb1a7de0d', 'VP Marketing', '2020-08-22 04:50:15.047753', '2020-08-22 04:50:15.047753'), 
('c37092c0-280e-11eb-aa97-9d0bb1a7de0d', 'Teacher', '2020-08-22 04:50:15.047753', '2020-08-22 04:50:15.047753'), 
('bdfb2c60-280e-11eb-aa97-9d0bb1a7de0d', 'Chemical Engineer', '2020-08-22 04:50:15.047753', '2020-08-22 04:50:15.047753'), 
('8426a370-280e-11eb-aa97-9d0bb1a7de0d', 'Web Developer IV', '2020-08-22 04:50:15.047753', '2020-08-22 04:50:15.047753'), 
('91d4aee0-280e-11eb-aa97-9d0bb1a7de0d', 'Assistant Professor', '2020-08-22 04:50:15.047753', '2020-08-22 04:50:15.047753'),
('91d4aee0-280e-11eb-aa97-9d0bb1a7de0d', 'Account Representative I', '2020-08-23 04:50:15.047753', '2020-08-22 04:50:15.047753');
