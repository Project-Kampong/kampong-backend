/* Create user roles */
INSERT INTO Roles (role_name) VALUES ('user');
INSERT INTO Roles (role_name) VALUES ('admin');

/* User population */
insert into Users (user_id, first_name, last_name, email, password, role) values ('f96b2138-1754-4c17-a405-940e20adc601', 'Admin', 'One', 'admin@gmail.com', $1, 'admin');
insert into Users (user_id, first_name, last_name, email, password, role) values ('b7662cd1-a2c9-4054-95e7-078e35ea6fa1', 'Derrick', 'Delagnes', 'derrick@gmail.com', $1, 'admin');
insert into Users (user_id, first_name, last_name, email, password, role) values ('d69a127d-815b-4834-b2b6-54ab398fccad', 'User', 'One', 'user@gmail.com', $1, 'user');
insert into Users (user_id, first_name, last_name, email, password, role) values ('f997120c-2956-482e-9ba3-81a12b4fecc1', 'Viki', 'Albrooke', 'valbrooke3@businessinsider.com', $1, 'user');
insert into Users (user_id, first_name, last_name, email, password, role) values ('2e9c26a0-7c1c-49d1-8c78-3a0545ca22eb', 'Konstance', 'Smitton', 'ksmitton4@toplist.cz', $1, 'user');

/* User profile population */
insert into Profiles (user_id, nickname, profile_picture, about, gender, dob, interest, phone, facebook_link, twitter_link, instagram_link, linkedin_link) values ('f96b2138-1754-4c17-a405-940e20adc601', 'Admin', 'https://robohash.org/autvelautem.jpg?size=500x500&set=set1', 'Quality-focused impactful projection', 'o', '1985-04-18 00:43:59', 'Geological Engineer', 97690390, 'http://baidu.com/ipsum/primis/in/faucibus/orci/luctus.xml', 'http://nhs.uk/at/diam/nam.png', 'http://nasa.gov/pede/justo/eu/massa/donec/dapibus/duis.aspx', 'https://linkedin.com/ante/vestibulum/ante/ipsum/primis/in.json');
insert into Profiles (user_id, nickname, profile_picture, about, gender, dob, interest, phone, facebook_link, twitter_link, instagram_link, linkedin_link) values ('b7662cd1-a2c9-4054-95e7-078e35ea6fa1', 'Derrick', null, 'Inverse local strategy', 'm', '1990-05-07 15:40:00', 'Software Consultant', 96831702, 'https://jigsy.com/eu/interdum/eu/tincidunt/in.html', 'http://nasa.gov/nisi/at/nibh/in/hac/habitasse.png', 'https://360.cn/sed/nisl/nunc/rhoncus/dui/vel.jpg', 'https://cbc.ca/id/luctus/nec/molestie/sed/justo/pellentesque.png');
insert into Profiles (user_id, nickname, profile_picture, about, gender, dob, interest, phone, facebook_link, twitter_link, instagram_link, linkedin_link) values ('d69a127d-815b-4834-b2b6-54ab398fccad', 'User One', 'https://robohash.org/consequaturatquia.jpg?size=500x500&set=set1', 'Down-sized disintermediate circuit', 'f', '2003-09-22 08:32:55', 'Statistician IV', 87685829, 'https://tripadvisor.com/ornare/imperdiet.png', 'https://google.com/quis/orci/nullam/molestie/nibh/in/lectus.xml', 'http://1und1.de/in/libero/ut/massa.png', 'http://i2i.jp/imperdiet/sapien/urna/pretium/nisl/ut.jpg');
insert into Profiles (user_id, nickname, profile_picture, about, gender, dob, interest, phone, facebook_link, twitter_link, instagram_link, linkedin_link) values ('f997120c-2956-482e-9ba3-81a12b4fecc1', 'Viki Albrooke', 'https://robohash.org/sedasperioresmaxime.bmp?size=500x500&set=set1', 'Face to face neutral conglomeration', 'u', '2000-07-04 19:07:24', 'VP Product Management', 84428699, 'https://nhs.uk/mauris.xml', 'http://uiuc.edu/sit/amet/consectetuer/adipiscing/elit/proin.aspx', 'http://cbsnews.com/elementum/eu/interdum.jsp', 'https://hibu.com/quam/sapien/varius/ut/blandit/non/interdum.html');
insert into Profiles (user_id, nickname, profile_picture, about, gender, dob, interest, phone, facebook_link, twitter_link, instagram_link, linkedin_link) values ('2e9c26a0-7c1c-49d1-8c78-3a0545ca22eb', 'Konstance Smitton', 'https://robohash.org/quodprovidenta.png?size=500x500&set=set1', 'Front-line non-volatile conglomeration', 'o', '1996-04-04 20:05:06', 'Software Engineer II', 84677316, 'http://51.la/dui/maecenas/tristique/est.json', 'https://mozilla.com/sagittis.jsp', 'http://vk.com/cubilia.html', 'https://bravesites.com/ut/mauris/eget/massa.jpg');

/* Listings population */
insert into Listings (listing_id, created_by, title, category, about, tagline, mission, listing_url, pic1, pic2, pic3, pic4, pic5, start_date) values ('43824166-bee2-426e-8a08-ca2c4e4120ae', 'f96b2138-1754-4c17-a405-940e20adc601', 'neque libero convallis eget', 'Human Resources', 'Customer-focused dynamic installation', 'integrate cross-platform initiatives', 'embrace sticky synergies', 'http://ifeng.com/nisl.jsp', 'https://robohash.org/nesciuntliberovoluptate.jpg?size=500x500&set=set1', 'https://robohash.org/ipsaiuresed.bmp?size=500x500&set=set1', 'https://robohash.org/animiautvoluptas.jpg?size=500x500&set=set1', 'https://robohash.org/fugaidconsequatur.png?size=500x500&set=set1', null, '2020-12-01 19:09:20');
insert into Listings (listing_id, created_by, title, category, about, tagline, mission, listing_url, pic1, pic2, pic3, pic4, pic5, start_date) values ('c975a572-452d-4824-8ed5-500b50488436', 'b7662cd1-a2c9-4054-95e7-078e35ea6fa1', 'vestibulum sed magna at nunc', 'Training', 'Team-oriented context-sensitive forecast', 'innovate B2C markets', 'cultivate cutting-edge markets', 'https://ehow.com/in/imperdiet/et/commodo/vulputate/justo.xml', 'https://robohash.org/etpossimusea.png?size=500x500&set=set1', null, null, null, null, '2020-07-30 13:54:45');
insert into Listings (listing_id, created_by, title, category, about, tagline, mission, listing_url, pic1, pic2, pic3, pic4, pic5, start_date) values ('d95a6c2e-3c33-447c-be0c-be399247dd3f', 'd69a127d-815b-4834-b2b6-54ab398fccad', 'ipsum integer a nibh in quis justo maecenas rhoncus aliquam', 'Research and Development', 'Triple-buffered client-server installation', 'expedite front-end e-services', 'streamline web-enabled ROI', 'https://mtv.com/blandit/mi/in.png', 'https://robohash.org/oditaperiamomnis.bmp?size=500x500&set=set1', null, 'https://robohash.org/auteligendimagnam.bmp?size=500x500&set=set1', null, null, '2020-01-01 20:54:13');
insert into Listings (listing_id, created_by, title, category, about, tagline, mission, listing_url, pic1, pic2, pic3, pic4, pic5, start_date) values ('cf4adc93-3b96-4bbc-8cb0-41e196b145ac', 'f997120c-2956-482e-9ba3-81a12b4fecc1', 'vehicula consequat morbi a ipsum integer a nibh in quis', 'Legal', 'Cloned 4th generation matrices', 'visualize bleeding-edge niches', 'utilize robust ROI', 'https://toplist.cz/aliquam.xml', 'https://robohash.org/quofugadolor.bmp?size=500x500&set=set1', 'https://robohash.org/utsednostrum.png?size=500x500&set=set1', null, 'https://robohash.org/laudantiumconsequatursequi.png?size=500x500&set=set1', null, '2020-12-25 22:21:11');
insert into Listings (listing_id, created_by, title, category, about, tagline, mission, listing_url, pic1, pic2, pic3, pic4, pic5, start_date) values ('e411bd80-d5cf-49ac-b847-18c9fc13377a', '2e9c26a0-7c1c-49d1-8c78-3a0545ca22eb', 'a odio in hac habitasse platea', 'Product Management', 'Adaptive disintermediate Graphical User Interface', 'engineer out-of-the-box solutions', 'e-enable dot-com metrics', 'http://i2i.jp/rhoncus/dui/vel.jpg', 'https://robohash.org/undeveroenim.bmp?size=500x500&set=set1', null, 'https://robohash.org/atquemolestiasvelit.jpg?size=500x500&set=set1', 'https://robohash.org/nonquodquam.png?size=500x500&set=set1', 'https://robohash.org/voluptaslaborumsimilique.png?size=500x500&set=set1', '2020-03-19 11:04:15');

/* ListingStories with paragraphed text */
insert into ListingStories (listing_id, overview, problem, solution, outcome) values ('43824166-bee2-426e-8a08-ca2c4e4120ae', null, null, null, null);
insert into ListingStories (listing_id, overview, problem, solution, outcome) values ('c975a572-452d-4824-8ed5-500b50488436', 'Up-sized hybrid moratorium', 'Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.', 'Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.', 'nam nulla integer pede justo lacinia eget tincidunt eget tempus vel pede morbi porttitor lorem id ligula suspendisse');
insert into ListingStories (listing_id, overview, problem, solution, outcome) values ('d95a6c2e-3c33-447c-be0c-be399247dd3f', null, null, null, null);
insert into ListingStories (listing_id, overview, problem, solution, outcome) values ('cf4adc93-3b96-4bbc-8cb0-41e196b145ac', 'Switchable neutral Graphic Interface', 'Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.', 'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros. Vestibulum ac est lacinia nisi venenatis tristique.', 'pellentesque quisque porta volutpat erat quisque erat eros viverra eget congue eget semper rutrum nulla nunc');
insert into ListingStories (listing_id, overview, problem, solution, outcome) values ('e411bd80-d5cf-49ac-b847-18c9fc13377a', 'Integrated fresh-thinking parallelism', 'Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.', 'Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus. Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci.', 'neque aenean auctor gravida sem praesent id massa id nisl venenatis lacinia aenean sit amet justo');

/* Skills mock data population */
insert into Skills (skill) values ('Auditing');
insert into Skills (skill) values ('Typesetting');
insert into Skills (skill) values ('Copywriting');
insert into Skills (skill) values ('WiFi');
insert into Skills (skill) values ('Media and Design');
insert into Skills (skill) values ('Programming');
insert into Skills (skill) values ('Management Consulting');
insert into Skills (skill) values ('Early Childhood');
insert into Skills (skill) values ('Geriatrics');
insert into Skills (skill) values ('Mortgage Banking');
insert into Skills (skill) values ('Swim Instruction');
insert into Skills (skill) values ('Web Development');
insert into Skills (skill) values ('Game Design');
insert into Skills (skill) values ('Psychiatry');


insert into ProfileSkills (user_id, skill_id) values ('f96b2138-1754-4c17-a405-940e20adc601', 1);
insert into ProfileSkills (user_id, skill_id) values ('f96b2138-1754-4c17-a405-940e20adc601', 2);
insert into ProfileSkills (user_id, skill_id) values ('f96b2138-1754-4c17-a405-940e20adc601', 3);
insert into ProfileSkills (user_id, skill_id) values ('b7662cd1-a2c9-4054-95e7-078e35ea6fa1', 4);
insert into ProfileSkills (user_id, skill_id) values ('b7662cd1-a2c9-4054-95e7-078e35ea6fa1', 5);
insert into ProfileSkills (user_id, skill_id) values ('d69a127d-815b-4834-b2b6-54ab398fccad', 6);
insert into ProfileSkills (user_id, skill_id) values ('f997120c-2956-482e-9ba3-81a12b4fecc1', 7);
insert into ProfileSkills (user_id, skill_id) values ('2e9c26a0-7c1c-49d1-8c78-3a0545ca22eb', 8);

insert into ListingSkills (listing_id, skill_id) values ('43824166-bee2-426e-8a08-ca2c4e4120ae', 1);
insert into ListingSkills (listing_id, skill_id) values ('43824166-bee2-426e-8a08-ca2c4e4120ae', 2);
insert into ListingSkills (listing_id, skill_id) values ('43824166-bee2-426e-8a08-ca2c4e4120ae', 3);
insert into ListingSkills (listing_id, skill_id) values ('43824166-bee2-426e-8a08-ca2c4e4120ae', 4);
insert into ListingSkills (listing_id, skill_id) values ('c975a572-452d-4824-8ed5-500b50488436', 5);
insert into ListingSkills (listing_id, skill_id) values ('c975a572-452d-4824-8ed5-500b50488436', 6);
insert into ListingSkills (listing_id, skill_id) values ('c975a572-452d-4824-8ed5-500b50488436', 7);
insert into ListingSkills (listing_id, skill_id) values ('c975a572-452d-4824-8ed5-500b50488436', 8);
insert into ListingSkills (listing_id, skill_id) values ('c975a572-452d-4824-8ed5-500b50488436', 9);
insert into ListingSkills (listing_id, skill_id) values ('d95a6c2e-3c33-447c-be0c-be399247dd3f', 10);
insert into ListingSkills (listing_id, skill_id) values ('d95a6c2e-3c33-447c-be0c-be399247dd3f', 11);
insert into ListingSkills (listing_id, skill_id) values ('d95a6c2e-3c33-447c-be0c-be399247dd3f', 12);
insert into ListingSkills (listing_id, skill_id) values ('d95a6c2e-3c33-447c-be0c-be399247dd3f', 13);
insert into ListingSkills (listing_id, skill_id) values ('d95a6c2e-3c33-447c-be0c-be399247dd3f', 14);
insert into ListingSkills (listing_id, skill_id) values ('d95a6c2e-3c33-447c-be0c-be399247dd3f', 1);
insert into ListingSkills (listing_id, skill_id) values ('cf4adc93-3b96-4bbc-8cb0-41e196b145ac', 2);
insert into ListingSkills (listing_id, skill_id) values ('cf4adc93-3b96-4bbc-8cb0-41e196b145ac', 3);
insert into ListingSkills (listing_id, skill_id) values ('cf4adc93-3b96-4bbc-8cb0-41e196b145ac', 4);
insert into ListingSkills (listing_id, skill_id) values ('cf4adc93-3b96-4bbc-8cb0-41e196b145ac', 5);
insert into ListingSkills (listing_id, skill_id) values ('cf4adc93-3b96-4bbc-8cb0-41e196b145ac', 6);
insert into ListingSkills (listing_id, skill_id) values ('e411bd80-d5cf-49ac-b847-18c9fc13377a', 7);
insert into ListingSkills (listing_id, skill_id) values ('e411bd80-d5cf-49ac-b847-18c9fc13377a', 8);
insert into ListingSkills (listing_id, skill_id) values ('e411bd80-d5cf-49ac-b847-18c9fc13377a', 9);

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

/* ListingAdmins mock data population */
insert into ListingAdmins (user_id, listing_id) values ('d69a127d-815b-4834-b2b6-54ab398fccad', '43824166-bee2-426e-8a08-ca2c4e4120ae');
insert into ListingAdmins (user_id, listing_id) values ('d69a127d-815b-4834-b2b6-54ab398fccad', 'c975a572-452d-4824-8ed5-500b50488436');
insert into ListingAdmins (user_id, listing_id) values ('f997120c-2956-482e-9ba3-81a12b4fecc1', '43824166-bee2-426e-8a08-ca2c4e4120ae');
insert into ListingAdmins (user_id, listing_id) values ('f997120c-2956-482e-9ba3-81a12b4fecc1', 'd95a6c2e-3c33-447c-be0c-be399247dd3f');
insert into ListingAdmins (user_id, listing_id) values ('f997120c-2956-482e-9ba3-81a12b4fecc1', 'c975a572-452d-4824-8ed5-500b50488436');
insert into ListingAdmins (user_id, listing_id) values ('2e9c26a0-7c1c-49d1-8c78-3a0545ca22eb', 'd95a6c2e-3c33-447c-be0c-be399247dd3f');

/* Features (featured-listings) mock data population */
insert into Features (listing_id) values ('43824166-bee2-426e-8a08-ca2c4e4120ae');
insert into Features (listing_id) values ('c975a572-452d-4824-8ed5-500b50488436');
insert into Features (listing_id) values ('d95a6c2e-3c33-447c-be0c-be399247dd3f');

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
