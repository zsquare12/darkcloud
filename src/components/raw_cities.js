const raw_cities = `
Fatwa
Dehri
Jaito
Pūnch
Keelakarai
Zunheboto
Zamānia
Zaidpur
Zahirābād
Yeola
Yellāpur
Yellandu
Yelahanka
Yavatmāl
Yāval
Yanam
Yamunānagar
Yādgīr
Wokha
Wer
Wellington
Wazīrganj
Wāshīm
Warud
Warora
Wāris Alīganj
Wardha
Wārāseonī
Warangal
Wanparti
Wānkāner
Wani
Walajapet
Wai
Wādi
Vyāra
Vuyyūru
Vrindāvan
Vriddhāchalam
Vizianagaram
Vite
Visnagar
Visakhapatnam
Vīsāvadar
Virudunagar
Viravanallūr
Vīrarājendrapet
Virār
Vinukonda
Villupuram
Vikārābād
Vijayawada
Vijāpur
Vidisha
Vettūr
Vettaikkaranpudur
Vetapālem
Verāval
Vepagunta
Venkatagiri
Vemalwāda
Velur
Vellore
Vejalpur
Vedaraniyam
Vayalār
Vattalkundu
Vāsudevanallūr
Vasind
Vāsco Da Gāma
Vasa
Varkala
Varangaon
Varanasi
Vaniyambadi
Vandavāsi
Valsād
Valparai
Vallabh Vidyanagar
Valabhīpur
Vaikam
Vaijāpur
Vadodara
Vadnagar
Vadlapūdi
Vādippatti
Vadamadurai
Vadakku Valliyūr
Vāda
Uttiramerūr
Uttarkāshi
Uttamapālaiyam
Utraula
Usilampatti
Usehat
Uravakonda
Uran
Upleta
Uppal Kalan
Unnāo
Unjha
Unhel
Una
Una
Ūn
Un
Umreth
Umred
Umarkot
Umarkhed
Umaria
Umarga
Ullal
Ulhasnagar
Ujjain
Ujhāni
Udumalaippettai
Udipi
Udhampur
Udgīr
Udankudi
Udalguri
Udaipura
Udaipur
Udaipur
Udaipur
Ooty
Bara Uchāna
Turaiyūr
Tura
Tuni
Tūndla
Tumsar
Tumkūr
Tulsīpur
Tuljāpur
Tufānganj
Tuensang
Thiruvananthapuram
Trichūr
Tonk
Tondi
Tohāna
Todaraisingh
Todabhim
Titlāgarh
Titāgarh
Tisaiyanvilai
Tiruvottiyūr
Cheyyar
Tiruvannāmalai
Tiruvallur
Tiruvalla
Thiruthani
Tiruttangal
Tirur
Tiruppuvanam
Tiruppur
Tirupparangunram
Tirupati
Tirunelveli
Tirumala
Tirukkoyilur
Tiruchengode
Tiruchirappalli
Tiruchchendur
Tīrthahalli
Tiptūr
Tinsukia
Tinnanūr
Tindivanam
Tilhar
Tīkamgarh
Tijāra
Thoubāl
Thiruvarur
Thāsra
Tharād
Thanjāvūr
Thānesar
Thāne
Thāna Bhawan
Thān
Thākurganj
Thakurdwara
Tezpur
Terdāl
Teonthar
Thenkasi
Teni
Tellicherry
Telhāra
Tekkali
Tekkalakote
Tekāri
Tehri
Teghra
Tāsgaon
Tarn Tāran
Tarikere
Tharangambadi
Tārānagar
Tarāna
Tāramangalam
Tarakeswar
Tāoru
Tanuku
Tāndūr
Tānda
Tāndā
Tanakpur
Tamlūk
Talwāra
Talwandi Bhai
Taloda
Talipparamba
Tālīkota
Taleigao
Talegaon Dābhāde
Tālcher
Talāja
Tāki
Takhatpur
Takhatgarh
Tājpur
Tādpatri
Tādepallegūdem
Tādepalle
Suriāpet
Suriānwān
Surendranagar
Sūratgarh
Sūrat
Sūrandai
Sūrajgarh
Supaul
Sunel
Sundarnagar
Sundargarh
Sunām
Sulya
Sūlūru
Sulur
Sultanpur
Sultānpur
Suket
Sūjāngarh
Suār
Srivilliputhur
Srīvardhan
Srivaikuntam
Srīsailain
Srīrāmnagar
Srīperumbūdūr
Srīnivāspur
Srinagar
Srīnagar
Sri Mādhopur
Karanpur
Chicacole
Sri Dūngargarh
Soygaon
Soron
Soro
Sorada
Sopur
Sonīpat
Songadh
Sonepur
Sonāri
Sonāmukhi
Sompeta
Someshwar
Solan
Sojītra
Sojat
Sohna
Sohāgpur
Siwāna
Siwān
Sivakasi
Sivagiri
Sivagiri
Sivaganga
Siuri
Sitārganj
Sītāpur
Sītāmarhi
Siswā Bāzār
Sisauli
Sirūr
Sirumugai
Siruguppa
Sirsilla
Sirsi
Sirsi
Sirsāganj
Sirsa
Sironj
Sirohi
Sīrkāzhi
Sirhind
Sīra
Sinnar
Singur
Singarāyakonda
Singānallūr
Sindhnūr
Sindgi
Shimla
Simdega
Silvassa
Sillod
Silchar
Silao
Sīkar
Sikandra Rao
Sikandarpur
Sikandarābād
Sikka
Sijua
Sihorā
Sihor
Sidlaghatta
Sidhi
Sidhaulī
Siddipet
Siddhapur
Sibsāgar
Shyamnagar
Shujālpur
Shrīrangapattana
Shrīrāmpur
Shrīgonda
Shorāpur
Shoranūr
Sholinghur
Solāpur
Shivpuri
Shīshgarh
Shirpur
Shirhatti
Shirdi
Shimoga
Shillong
Shiliguri
Shikohābād
Shikārpūr
Shikārpur
Shiggaon
Shertallai
Sherkot
Sherghāti
Sheopur
Sheohar
Sheoganj
Shegaon
Shāntipur
Shamsābād
Shamsābād
Shāmli
Shāmgarh
Shājāpur
Sheikhpura
Shāhpura
Shāhpura
Shāhpur
Shāhpur
Shāhpur
Shāhpur
Shāhjānpur
Shāhi
Shāhganj
Shahdol
Shāhāda
Shāhābād
Shāhābād
Shāhābād
Shāhābād
Serchhīp
Seram
Seoni Mālwa
Seoni
Seondha
Seohāra
Sendhwa
Sehore
Secunderabad
Sāyla
Sawāi Mādhopur
Sāvda
Savanūr
Sāvantvādi
Sausar
Saundatti
Sathyamangalam
Sattur
Sattenapalle
Satna
Satara
Satānā
Sāsvad
Sarwār
Sarkhej
Sardulgarh
Sardhana
Sardārshahr
Sarauli
Sārangpur
Saraipali
Sarāi Mīr
Sarāi Ākil
Saoner
Sānkrāil
Sankeshwar
Sangrūr
Sāngola
Sangod
Sāngli
Sangariā
Sangāreddi
Sangamner
Sandūr
Sandīla
Sāndi
Sancoale
Sānchor
Sanāwad
Sanaur
Sānand
Samthar
Samrāla
Samdari
Sāmbhar
Sambhal
Sambalpur
Sāmba
Samāstipur
Sāmalkot
Samālkha
Sālūr
Sālūmbar
Salem
Salāya
Saktī
Sakleshpur
Saint Thomas Mount
Sainthia
Selu
Saiha
Saidpur
Sāhibganj
Sahāwar
Sahaswān
Sahaspur
Saharsa
Sahāranpur
Sagauli
Saugor
Sāgar
Safīpur
Safidon
Sādri
Sadāseopet
Sadalgi
Sadābād
Sabalgarh
Rusera
Rura
Ropar
Rūdarpur
Roorkee
Ron
Rohtak
Roha
Robertsonpet
Robertsganj
Risod
Rishra
Rishīkesh
Rīngas
Richha
Rewāri
Rewa
Revelganj
Repalle
Reoti
Renukūt
Renigunta
Remuna
Rehli
Rāzām
Rāybāg
Rāyadrug
Rāyachoti
Rāya
Raxaul
Rāwatsār
Rāwatbhāta
Rāver
Ratnagiri
Ratlām
Ratia
Rāth
Ratanpur
Ratangarh
Rasrā
Rasipuram
Rāpar
Rānīpur
Rānikhet
Rānīganj
Rānībennur
Rānia
Rangia
Rangāpāra
Ranchi
Rānāvāv
Rānāghāt
Rāmtek
Rampur Hat
Rāmpura
Rāmpura
Rāmpur
Rāmpur
Rāmnagar
Rāmnagar
Rāmnagar
Rāmjībanpur
Rāmgundam
Rāmgarh
Rāmgarh
Rāmganj Mandi
Rameswaram
Rāmāpuram
Ramanathapuram
Closepet
Rāmachandrapuram
Rājūra
Rājula
Rājsamand
Rājpura
Rajpur
Rajpur
Rājpīpla
Rāj-Nāndgaon
Rājmahal
Rājkot
Rājgurunagar
Rājgīr
Rājgarh
Rājgarh
Rājgarh
Rājgarh
Rajaori
Rajapalaiyam
Rāzampeta
Rājaldesar
Rājākhera
Rājahmundry
Rāisinghnagar
Raisen
Rāipur
Raipur
Raipur
Rāikot
Raigarh
Rāiganj
Rāichūr
Rāhuri
Rahimatpur
Rāhatgarh
Raghunathpur
Rāghogarh
Rafiganj
Raebareli
Rādhanpur
Rabkavi
Kollam
Kasba
Qādiān
Puttūr
Puttūr
Pushkar
Pusad
Purwā
Puruliya
Purnia
Pūrna
Puri
Pūranpur
Pupri
Punjai Puliyampatti
Punganūru
Pune
Pūndri
Punāsa
Punalūr
Pūnāhāna
Pulwama
Puliyangudi
Pulivendla
Pulgaon
Pukhrāyān
Pudukkottai
Proddatūr
Pratāpgarh
Port Blair
Porsa
Porbandar
Poonamalle
Ponnūru
Ponneri
Ponnāni
Puducherry
Ponda
Polūr
Pollachi
Polavaram
Polasara
Pokaran
Pithorāgarh
Pithāpuram
Piro
Piriyāpatna
Piravam
Pīpri
Pipraich
Pipili
Pīpār
Pinjaur
Pindwāra
Pināhat
Pimpri
Pilkhua
Pīlibhīt
Pilibangan
Pilāni
Pihānī
Phulpur
Phulera
Phulabāni
Phirangipuram
Phillaur
Phek
Phaphūnd
Phaltan
Phalodi
Phalauda
Phagwāra
Petlād
Perundurai
Perumpāvūr
Periyanayakkanpalaiyam
Periyakulam
Peravurani
Peranāmpattu
Perambalur
Penukonda
Penugonda
Pennāgaram
Pennādam
Pen
Pehowa
Peddāpuram
Peddapalli
Pedana
Payyannūr
Pawāyan
Pāvugada
Pauri
Pawni
Pātūr
Pattukkottai
Patti
Patnāgarh
Patna
Patiāla
Pāthri
Patharia
Pāthardih
Pāthardi
Pathānkot
Pathanāmthitta
Pathalgaon
Pataudi
Patancheru
Pātan
Patāmundai
Pāsighāt
Pasān
Parvatsar
Pārvatipuram
Partūr
Parola
Parli Vaijnāth
Parlākimidi
Pariyāpuram
Parīchhatgarh
Pārdi
Parbhani
Paravūr
Parāsia
Paramagudi
Parādīp Garh
Pāppinisshēri
Papanasam
Pāonta Sāhib
Panvel
Panruti
Panna
Panmana
Pānīpat
Pānihāti
Pandua
Pāndhurnā
Pandharpur
French Rocks
Panaji
Panāgar
Palwal
Pāloncha
Palani
Palmaner
Pallippatti
Pallikondai
Pallāvaram
Pallappatti
Palladam
Pālkonda
Pālitāna
Paliā Kalān
Pāli
Pāli
Palakkad
Pālghar
Palera
Palāsa
Pālanpur
Pālakollu
Pālakkodu
Pākaur
Pākāla
Paithan
Pahāsu
Padrauna
Padra
Padmanābhapuram
Padampur
Padampur
Padam
Pachperwa
Pāchora
Ottappālam
Osmanabad
Orai
Ongole
Okha
Ozar
Obra
Nūzvīd
Nūrpur
Nowrangapur
North Lakhimpur
North Guwāhāti
Nongstoin
Nokha
Nohar
Noāmundi
Nizāmābād
Nirmāli
Nirmal
Nipāni
Neem ka Thana
Nīmbāhera
Nimāparha
Nīmāj
Nīlokheri
Nīlēshwar
Nilanga
Nilakottai
Nīlgiri
Nihtaur
Nidadavole
Nichlaul
Neyyāttinkara
New Delhi
Neral
Nepānagar
Nellore
Devarkonda
Nellikkuppam
Nelamangala
Nedumangād
Nāyudupet
Nayāgarh
Nawāshahr
Nawalgarh
Niwai
Nawāda
Nawābganj
Nawābganj
Nawābganj
Nāwa
Navalgund
Navadwīp
Nautanwa
Naugachhia
Nattam
Nāthdwāra
Nasrullāhganj
Nāsriganj
Nāspur
Nasīrābād
Nashik
Narwar
Narwāna
Narsīpatnam
Narsinghgarh
Narsimhapur
Nārnaund
Nārnaul
Nargund
Naregal
Nārāyanpet
Narāyangarh
Nāravārikuppam
Naraura
Narauli
Narasaraopet
Narasapur
Narasannapeta
Naraini
Naraina
Napāsar
Nānpāra
Nanjangūd
Nāngloi Jāt
Nāngal Township
Nandyāl
Nandurbar
Nāndūra Buzurg
Nandikotkūr
Nandigāma
Nāndgaon
Nanded
Nanauta
Nāmrup
Nambiyūr
Nāmakkal
Nāmagiripettai
Nalhāti
Nalgonda
Naldurg
Nakūr
Naksalbāri
Nakodar
Najībābād
Nainwa
Nainpur
Naini Tāl
Naihāti
Nahorkatiya
Nāhan
Nagpur
Nāgod
Nagīna
Nāgercoil
Nagda
Nāgaur
Nāgar Karnūl
Nagari
Nagar
Nāgappattinam
Nāgamangala
Naduvannūr
Nadiād
Nādbai
Nādāpuram
Nabīnagar
Nābha
Mysore
Muzaffarpur
Muzaffarnagar
Mūvattupula
Muttupet
Mussoorie
Musiri
Mushābani
Murwāra
Murtajāpur
Murshidābād
Murlīganj
Morinda
Murbād
Murādnagar
Munnar
Monghyr
Mungeli
Mungaoli
Mūndwa
Mundra
Mundgod
Mundargi
Multai
Mūlki
Mulgund
Mulbāgal
Muluppilagadu
Mūl
Muktsar
Mukher
Mukeriān
Muhammadābād
Muhammadābād
Muhammadābād
Mughal Sarāi
Mudkhed
Mudhol
Mudgal
Muddebihāl
Mūdbidri
Mubārakpur
Mothīhāri
Morwa
Morsi
Morena
Morbi
Morār
Moram
Morādābād
Mon
Mokokchūng
Mokameh
Moirāng
Moga
Modāsa
Misrikh
Mirzāpur
Miriālgūda
Mīrganj
Mīrānpur Katra
Mīrānpur
Mīnjūr
Milak
Mihona
Mhāsvād
Mettur
Mettupalayam
Merta
Mendarda
Memāri
Melur
Mehndāwal
Mehekar
Meerut
Medinīpur
Medak
Mayiladuthurai
Mayāng Imphāl
Mawāna
Mavoor
Māvelikara
Maur
Mauganj
Maudaha
Mau Aimma
Mau
Mau
Mattanūr
Mathura
Mātābhānga
Masaurhi Buzurg
Marmagao
Mārkāpur
Mariāni
Mariāhu
Marhaura
Margherita
Marakkanam
Marayur
Mārahra
Māpuca
Mānwat
Mānvi
Manthani
Mānsa
Mānsa
Manoharpur
Mannargudi
Mannārakkāt
Manmād
Mankāchar
Mājalgaon
Manjhanpur
Manjeri
Manihāri
Maniar
Mangrūl Pīr
Māngrol
Māngrol
Manglaur
Mangalore
Mangaldai
Mangalagiri
Maner
Mandya
Māndvi
Māndvi
Māndu
Mandsaur
Mandlā
Mandi
Mandāwar
Mandapeta
Mandapam
Māndalgarh
Māndal
Mancherāl
Manāwar
Mānāvadar
Manāsa
Manapparai
Manamadurai
Manali
Mālvan
Mālūr
Mālpura
Malpe
Mallasamudram
Malkāpur
Malakanagiri
Malīhābād
Māler Kotla
Mālegaon
Malavalli
Malaut
Malappuram
Mākum
Maksi
Makrāna
Mairwa
Mainpuri
Maināguri
Maihar
Mahwah
Mahudha
Maholi
Mahobā
Mahmudābād
Mahīshādal
Mahgawān
Maheshwar
Mahendragarh
Mahemdāvād
Mahē
Mahbūbnagar
Mahbūbābād
Mahāsamund
Mahārāganj
Mahārājgani
Maham
Mahālingpur
Mahād
Maghar
Kulti
Māgadi
Madurāntakam
Madurai
Madukkūr
Madukkarai
Chennai
Madikeri
Madhyamgram
Madhupur
Maddagiri
Madhubani
Madhipura
Madgaon
Maddūr
Madanapalle
Machilīpatnam
Machhlīshahr
Māchhīwāra
Mācherla
Lunglei
Lūnāvāda
Ludhiāna
Lucknow
Luckeesarai
Losal
Loni
Lonavla
Lonār
Lohārdaga
Lingsugūr
Limbdi
Leteri
Leh
Lāwar Khās
Laungowāl
Latur
Lāthi
Lātehār
Lar
Lālsot
Lālpur
Lalitpur
Lalgudi
Lālgola
Lālganj
Lālganj
Lakshmeshwar
Laksar
Lakhyabad
Lakhnādon
Lakhīmpur
Lākheri
Lāharpur
Lahār
Lādwa
Lādnūn
Lachhmangarh Sīkar
Kuzhithurai
Koothanallur
Kuttampuzha
Kutiyāna
Kutiatodu
Kushtagi
Kurinjippādi
Kurduvādi
Kurandvād
Kuppam
Kunnamkulam
Kunnamangalam
Kunigal
Kundla
Kundgol
Kundarkhi
Kunda
Kumta
Kūmher
Kumhāri
Kumbhrāj
Kumbakonam
Kulu
Kulpahār
Kulittalai
Kulgam
Kukshi
Kūkatpalli
Kuju
Kūdligi
Kudachi
Kuchera
Kuchāman
Kuchaiburi
Krishnarājpet
Krishnanagar
Krishnagiri
Kozhikode
Koynanagar
Kovvūr
Kovūr
Kovilpatti
Kottūru
Kottayam
Kottagūdem
Kotputli
Kotma
Kotdwāra
Kotapārh
Kotamangalam
Kotagiri
Kota
Kotā
Kosigi
Kosi
Kosamba
Korwai
Koregaon
Korba
Koratla
Korāput
Koppal
Kopargaon
Kopāganj
Konnūr
Konnagar
Kondapalle
Kondagaon
Konch
Konārka
Kolasib
Kollegāl
Kolhāpur
Kolāras
Kolār
Colachel
Kokrajhar
Kohima
Koelwār
Kodungallūr
Kodoli
Kodīnar
Kodarmā
Kodār
Kodaikānāl
Koch Bihār
Koāth
Kizhake Chālakudi
Kithor
Kishtwār
Kishangarh
Kishanganj
Kīratpur
Kiraoli
Kinwat
Kichha
Khūtār
Khurja
Khurda
Khurai
Khunti
Khuldābād
Khowai
Khopoli
Khirkiyān
Khilchipur
Khetri
Khetia
Kheri
Kherālu
Khekra
Khed Brahma
Kheda
Khātra
Khatīma
Khātegaon
Khatauli
Khārupatia
Kharsia
Kharkhauda
Khargone
Khardah
Kharar
Kharakvasla
Kharagpur
Kharagpur
Khāpa
Khanna
Khandwa
Khandela
Khānāpur
Khammam
Khāmgaon
Khambhāt
Khambhāliya
Khamaria
Khalīlābād
Khajuraho Group of Monuments
Khairāgarh
Khairāgarh
Khairābād
Khair
Khagaul
Khagaria
Khadki
Khada
Khāchrod
Kesinga
Keshorai Pātan
Keshod
Kerūr
Kendrāparha
Kenda
Kemrī
Kekri
Kāyankulam
Kayalpattinam
Kawardha
Kāvali
Kattivākkam
Kattanam
Kātrās
Kātpādi
Kātoya
Kātol
Katihar
Kathua
Kāthor
Katghora
Katangi
Katangi
Kasrāwad
Kashipur
Kāsganj
Kāsaragod
Karwar
Karur
Kartārpur
Kārsiyāng
Karol Bāgh
Karnāl
Karmāla
Kārkala
Karjat
Karīmnagar
Karīmganj
Karhal
Karera
Kareli
Karauli
Kāranja
Karamsad
Kāramadai
Kāraikkudi
Kāraikāl
Karād
Kapūrthala
Kāpren
Kapadvanj
Kānth
Kantābānji
Kānt
Kanpur
Kannod
Kanniyākumāri
Kannauj
Kānnangād
Kannad
Kānker
Kānke
Kankauli
Kanigiri
Kangayam
Kandukūr
Kāndla
Kāndi
Kāndhla
Kānchipuram
Kānkānhalli
Kāmthi
Kampli
Cumbum
Kāmārhāti
Kāmāreddi
Kāman
Kamalganj
Kāmākhyānagar
Kalyani
Kalyān
Kalugumalai
Kālpi
Kalpetta
Kālol
Kālna
Kalmeshwar
Kallidaikurichchi
Kallakkurichchi
Kālka
Kāliyāganj
Kālimpong
Kalghatgi
Kālāvad
Kālānwāli
Kalānaur
Kalamnūri
Kalamb
Kalakkādu
Kakrāla
Kākori
Kākināda
Kakching
Kaithal
Kairāna
Kaimori
Kaimganj
Kailāshahar
Kailāras
Kaikalūr
Kāgal
Kadūr
Kadod
Kadiri
Kadi
Kadayanallur
Kānchrāpāra
Kachhwa
Kabrāi
Junnar
Jūnāgarh
Jūnāgadh
Jumri Tilaiyā
Jalandhar
Jugsālai
Jorhāt
Jora
Jalārpet
Jogbani
Jodiya Bandar
Jodhpur
Jodhpur
Jintūr
Jīnd
Jhūsi
Jhunjhunūn
Jhinjhāna
Jhīnjhak
Jhārsuguda
Jharia
Jhārgrām
Jhānsi
Jhanjhārpur
Jhālu
Jhālrapātan
Jhalida
Jhālāwār
Jhajjar
Jhā Jhā
Jhābua
Jewar
Jevargi
Jetpur
Jeypore
Jaynagar
Jaynagar-Majilpur
Jayamkondacholapuram
Jāwad
Jaunpur
Jatāra
Jatani
Jaswantnagar
Jaspur
Jasidih
Jashpurnagar
Jasdan
Jarwal
Jaorā
Jānsath
Jānjgīr
Jangipur
Jangaon
Jandiāla
Jāmuria
Jamūī
Jāmtāra
Jamshedpur
Jamnagar
Jammu
Jammalamadugu
Jamkhandi
Jambusar
Jamālpur
Jāmai
Jāmadoba
Jalpāiguri
Jalor
Jālna
Jalgaon Jamod
Jalgaon
Jaleshwar
Jalesar
Jālaun
Jalālpur
Jalālpur
Jalālī
Jalālābād
Jalālābad
Jalālābād
Jājpur
Jaitāran
Jaisingpur
Jaisalmer
Jais
Jaipur
Jahāzpur
Jahāngīrābād
Jahānābād
Jagtiāl
Jagraon
Jaggayyapeta
Jagdīspur
Jagdīshpur
Jagdalpur
Jagatsinghapur
Jagalūr
Jagādhri
Jabalpur
Itimādpur
Itārsi
Itānagar
Islāmpur
Islāmpur
Islāmnagar
Irugūr
Irinjālakuda
Iringal
Ingrāj Bāzār
Indri
Indore
Indi
Indergarh
Indāpur
Imphal
Ilkal
Igatpuri
Idappadi
Ichchāpuram
Ichalkaranji
Hyderabad
Hadagalli
Husainābād
Hunsūr
Hungund
Hukeri
Hugli
Hubli
Howli
Hosūr
Hospet
Hoskote
Hoshangābād
Hosdurga
Honnāli
Honāvar
Homnābād
Hole Narsipur
Holalkere
Hojāi
Hodal
Hisuā
Hisar
Hiriyūr
Hirekerūr
Hīrākud
Hinjilikatu
Hingoli
Hinganghāt
Hindupur
Hindoria
Hindaun
Himatnagar
Hilsa
Hazārībāg
Hāveri
Hatta
Hāthras
Hastināpur
Hassan
Hāsimāra
Hasanpur
Harūr
Harsūd
Harpanahalli
Harpālpur
Hārij
Harihar
Haridwar
Hardoī
Harda Khās
Hāpur
Hāora
Hanumāngarh
Hānsi
Hāngal
Handiā
Hamīrpur
Hamīrpur
Halvad
Hālol
Haliyal
Hālīsahar
Haldwani
Haldaur
Hājo
Hājīpur
Hailākāndi
Hāflong
Hadgāon
Hābra
Gwalior
Guskhara
Guruvāyūr
Guru Har Sahāi
Gursarāi
Gursahāiganj
Gurmatkāl
Gurgaon
Gunupur
Guntur
Asifābād
Guntakal Junction
Gunnaur
Gundlupet
Guna
Gummidipundi
Gumla
Gumia
Guledagudda
Gulbarga
Gulāothi
Gulābpura
Gūduvāncheri
Gūdūr
Gudiyatham
Gudivāda
Gudalur
Gubbi
Goyerkāta
Govardhan
Gosāba
Gorakhpur
Gorakhpur
Gobichettipalayam
Gopālganj
Gondiā
Gondal
Gondā City
Gomoh
Gola Gokarannāth
Golāghāt
Gokarna
Gokak
Gohāna
Gohadi
Godhra
Godda
Gobindpur
Gobārdānga
Goālpāra
Girīdīh
Gingee
Giddarbāha
Giddalūr
Ghugus
Ghoti Budrukh
Ghosī
Ghazīpur
Ghāziābād
Ghātsīla
Ghātanji
Ghātampur
Ghātāl
Gharaunda
Gevrai
Gaya
Gauripur
Goribidnūr
Guwahati
Garhwa
Garui
Gariadhar
Garhshankar
Garhmuktesar
Garhākota
Gannavaram
Gangtok
Gangolli
Gangoh
Gangāwati
Gangārāmpur
Gangāpur
Gangāpur
Gangāpur
Gangānagar
Gangākher
Ghandinagar
Gāndhīdhām
Gandevi
Gāndarbal
Gajraula
Gajendragarh
Gadwāl
Gadhinglaj
Gadhada
Gādarwāra
Gadag
Fort Gloster
Forbesganj
Fīrozpur Jhirka
Ferozepore
Fīrozābād
Ferokh
Fāzilka
Fatehpur Sīkri
Fatehpur
Fatehpur
Fatehpur
Fatehgarh Chūriān
Fatehganj West
Fatehābād
Fatehābād
Farrukhnagar
Farrukhābād
Farīdpur
Farīdkot
Farīdābād
Farakka
Fālākāta
Faizpur
Fyzābād
Etāwah
Erraguntla
Erode
Erāttupetta
Erandol
Emmiganūr
Ellore
Elūr
Ellenabad
Elamanchili
Egra
Dwārka
Durgapur
Durgāpur
Durg
Dūngarpur
Ganj Dundwāra
Dumraon
Dumra
Dumka
Dum Duma
Dam Dam
Duliāgaon
Dugda
Dubrājpur
Dornakal
Dorāha
Dongargarh
Dondaicha
Dombivli
Dod Ballāpur
Doda
Diu
Dīsa
Diphu
Dīnhāta
Dindori
Dindigul
Dīnānagar
Dimāpur
Digras
Dīglūr
Dighwāra
Digboi
Dīg
Dīdwāna
Dicholi
Dibrugarh
Dibai
Diamond Harbour
Dhūri
Dhupgāri
Dhuliān
Dhūlia
Dhuburi
Dhrol
Dhrāngadhra
Dhorāji
Dhone
Dholka
Dhing
Dhenkānāl
Dhekiajuli
Dhaurahra
Dhaulpur
Dhārūr
Dhāruhera
Dharamsala
Dharmavaram
Dharmapuri
Dharmanagar
Dharmadam
Dharmābād
Dhāriwāl
Dhāri
Dharapuram
Dharangaon
Dharampur
Dhār
Dhanera
Dhandhuka
Dhanbād
Dhanaura
Dhanaula
Dhamtari
Dhāmpur
Dhāmnod
Dhāka
Dewas
Deoli
Devgarh
Devgadh Bāriya
Devanhalli
Devakottai
Deūlgaon Rāja
Deshnoke
Depālpur
Deori Khās
Deoria
Deoraniān
Deoli
Deolāli
Deogarh
Deoband
Denkanikota
Delhi
Dehra Dūn
Dausa
Daund
Daudnagar
Dattāpur
Datia
Dātāganj
Dasūya
Dāsna
Daryāpur
Dārwha
Dārjiling
Darbhanga
Quthbullapur
Dandeli
Dinapore
Damoh
Dāmnagar
Daman
Daltonganj
Dalsingh Sarai
Dalkola
Dākor
Dohad
Dahegām
Dāhānu
Dādri
Dabwāli
Dabra
Daboh
Dabhoi
Cuttack
Curchorem
Cuncolim
Cumbum
Cuddapah
Cuddalore
Coondapoor
Colonelganj
Colgong
Calangute
Coimbatore
Cochin
Clement Town
Chūru
Churāchāndpur
Chunār
Chotila
Chopda
Chodavaram
Rampachodavaram
Chittūr
Chittaurgarh
Chittaranjan
Chitradurga
Chītāpur
Chidawa
Chīrāla
Chīpurupalle
Chiplūn
Chintāmani
Chinna Salem
Chinnamanūr
Chincholi
Chillupār
Chilakalūrupet
Chikodi
Chiknāyakanhalli
Chikmagalūr
Chikhli
Chik Ballāpur
Chidambaram
Chicholi
Chhoti Sādri
Chhota Udepur
Chhindwāra
Chhibrāmau
Chhatarpur
Chhātāpur
Chhāta
Chharra
Chhaprauli
Chāpra
Chhāpar
Chhala
Chhabra
Chettipālaiyam
Chetput
Chennimalai
Chengannūr
Chengam
Chengalpattu
Chāvakkād
Chaksu
Chatrapur
Chatra
Chās
Charthāwal
Charkhi Dādri
Charkhāri
Chāpar
Channarāyapatna
Channapatna
Channagiri
Changanācheri
Chāndor
Chāndūr Bāzār
Chāndūr
Chāndur
Chānda
Chandrakona
Chāndpur
Chandigarh
Chanderi
Chanduasi
Chandauli
Chandannagar
Chānasma
Chamrajnagar
Chāmpa
Chamba
Challapalle
Challakere
Chālisgaon
Chalāla
Chakradharpur
Chaklāsi
Chākia
Chākan
Chāībāsa
Canning
Cannanore
Kolkata
Byādgi
Buxar
Burla
Burhar
Burhānpur
Būndu
Būndi
Buldāna
Bulandshahr
Budhlāda
Budhāna
Budaun
Brājarājnagar
Brahmapur
Botād
Borsad
Borivli
Bongaigaon
Mumbai
Bolpur
Bokāro
Bokajān
Boisar
Bodināyakkanūr
Buddh Gaya
Bodhan
Bobbili
Biswān
Bissāu
Bishnupur
Bisauli
Bīsalpur
Birūr
Bīrpur
Birmitrapur
Binka
Bindki
Etāwa
Bilthra
Bilsi
Bilsanda
Bilimora
Bilhaur
Bilgrām
Bilgi
Bīlāspur
Bilāspur
Bilāsipāra
Bilāri
Bilāra
Bikramganj
Bīkaner
Bijnor
Bijbehara
Bijāwar
Bijapur
Bihār Sharīf
Bihārīganj
Bidhūna
Bīdar
Biaora
Bhuvanagiri
Bhusāval
Bhūm
Bhuj
Bhudgaon
Bhubaneshwar
Bhuban
Bhor
Bhopal
Bhongīr
Bhongaon
Bhogpur
Bhiwāni
Bhiwandi
Bhitarwār
Bhīnmāl
Bhinga
Bhindār
Bhind
Bhīmunipatnam
Bhīmavaram
Bhīlwāra
Bhilai
Bhīkhi
Bhikangaon
Bhāyāvadar
Bhayandar
Bhawānipatna
Bhawānīgarh
Bhawāniganj
Bhavnagar
Bhavāni
Bhattiprolu
Bhātpāra
Bhatkal
Bhatinda
Bhātāpāra
Bhasāwar
Bharwāri
Bharthana
Bharatpur
Bhānvad
Bhānpurī
Bhānpura
Bhanjanagar
Bhānder
Bhandāra
Bhālki
Bhaisa
Bhainsdehi
Bhāgalpur
Bhadreswar
Bhadrāvati
Bhadrakh
Bhadrāchalam
Bhādra
Bhadohi
Bhadaur
Bhādāsar
Bhachāu
Bhabhua
Beypore
Bewar
Betūl
Bettiah
Betamcherla
Beri Khās
Berasia
Beohāri
Bemetāra
Belūr
Belsand
Belonia
Bellary
Belgaum
Beldānga
Bela
Behror
Behat
Begusarai
Begūn
Begamganj
Bedi
Beāwar
Bāzpur
Bayāna
Bawāna
Bauda
Batāla
Baswa
Bāsudebpur
Bastī
Bāsoda
Basni
Basmat
Basi
Basi
Basi
Basavana Bāgevādi
Basavakalyān
Barwāni
Barwāla
Bāruni
Bāruipur
Bārsi
Barpeta
Barpāli
Barnāla
Bārmer
Barki Saria
Barka Kāna
Barjala
Bari Sādri
Bāri
Barhiya
Bārh
Bargi
Bargarh
Bareilly
Bārdoli
Barddhamān
Bar Bigha
Baraut
Barauli
Bārāsat
Bārāsat
Baranagar
Bārān
Bāramūla
Bārāmati
Bārākpur
Bāpatla
Banūr
Bantvāl
Bāntva
Bānswāra
Bānswāda
Bānsi
Bānsdīh
Bānsbāria
Bannūr
Banmankhi
Bānkura
Bānki
Bānka
Bāngarmau
Bowringpet
Bangaon
Bangaon
Banganapalle
Bengaluru
Banga
Bandipura
Bāndīkūi
Bānda
Banda
Banat
Bānapur
Bāmor Kalān
Bālurghāt
Bālugaon
Balrāmpur
Bālotra
Baloda Bāzār
Balod
Bāli
Ballālpur
Bāli
Balasore
Balarāmpur
Bālāpur
Balāngīr
Bālāghāt
Bālāchor
Bakhtiyārpur
Baj Baj
Bairāgnia
Byndoor
Bail-Hongal
Baihar
Baidyabāti
Bahraigh
Bahjoi
Baheri
Baharampur
Bahādurgarh
Bahādurganj
Bāh
Bagulā
Bāghpat
Bagdogra
Bāgha Purāna
Bāgepalli
Bagasra
Bagar
Bagalkot
Bagaha
Bagaha
Badvel
Badūria
Badnāwar
Badlapur
Bādāmi
Badagara
Bada Barabīl
Bachhraon
Babrāla
Bābra
Babīna
Baberu
Bābai
Azamgarh
Ajodhya
Ayakudi
Avanigadda
Avinashi
Āvadi
Ausa
Aurangābād
Aurangabad
Auraiya
Aurād
Attur
Attingal
Attili
Atraulī
Atmakūr
Adirampattinam
Athni
Āthagarh
Atarra
Āsind
Āsika
Ashta
Ashta
Ashoknagar
Āsansol
Āsandh
Ārvi
Aruppukkottai
Arumuganeri
Arukutti
Arsikere
Āron
Arkalgūd
Ariyalūr
Arcot
Arāria
Arantāngi
Ārani
Ārangaon
Arang
Arāmbāgh
Arakkonam
Arrah
Aonla
Anūpshahr
Anūppur
Anūpgarh
Anta
Anshing
Annur
Annigeri
Ankleshwar
Anjār
Anjangaon
Anjad
Angul
Angamāli
Anekal
Andol
Anthiyur
Āndippatti
Anantnag
Anantapur
Anandpur
Ānand
Anakāpalle
Anaimalai
Amudālavalasa
Āmta
Amroli
Amroha
Amritsar
Amreli
Amrāvati
Amod
Āmli
Āmlāgora
Amla
Amet
Ambur
Ambikāpur
Ambattūr
Ambasamudram
Ambāla
Ambājogāi
Ambāh
Ambad
Amarpur
Amarpātan
Amarnāth
Amalner
Amalāpuram
Aluva
Alwar
Alot
Along
Alnāvar
Almora
Alleppey
Allahābād
Alīpur
Alīgarh
Alīganj
Alībāg
Ālangulam
Alangāyam
Alandur
Alandi
Aland
Akot
Akola
Aklera
Akivīdu
Akbarpur
Akbarpur
Akaltara
Akalkot
Ajra
Ajnāla
Ajmer
Aizawl
Ahraura
Ahmadpur
Ahmadnagar
Ahmedabad
Agra
Agartala
Agar
Afzalpur
Afzalgarh
Adūr
Adra
Ādoni
Ādilābād
Addanki
Achhnera
Achalpur
Ābu Road
Ābu
Abohar
Abhayāpuri
Contai
Haldia
Srirāmpur
Dumjor
Bankra
Chakapara
Mahiari
Dhulagari
Pānchla
Nangi
Pujali
Monoharpur
Nabagrām
Soyībug
Singāpur
Ghatkesar
Vadigenhalli
Ādampur
Porur
Madipakkam
Perungudi
Madambakkam
Powai
Navi Mumbai
Murudeshwara
Shivaji Nagar
Greater Noida
Mohali
Pithampur
Barbil
Airoli
Aluva
Kotkapura
Muvattupuzha
Perumbavoor
Vapi
Baddi
Noida
Bhiwadi
Mandideep
Singrauli
Birpara
Jaigaon
Akkarampalle
Bellampalli
Chemmumiahpet
Gaddi Annaram
Dasnapur
Kanuru
Lal Bahadur Nagar
Malkajgiri
Mandamarri
Chinnachowk
Kyathampalle
Gajuwaka
Manuguru
Kalyandurg
Ponnur
Ramanayyapeta
Palwancha
Barpeta Road
Sathupalli
Yanamalakuduru
Morigaon
Naharlagun
Serilingampalle
Silapathar
Lumding Railway Colony
Aistala
Ashoknagar Kalyangarh
Bahula
Bhawanipur
Zira
Ramagundam
Cherpulassery
Kirandul
Shiraguppi
Neelankarai
Injambakkam
Kultali
Shahbazpur
Kumbalam
Aroor
Kadakkavoor
Kalavoor
Kalamassery
Cherthala
Abrama
Malkapur
Bharūch

`.toLowerCase();
const citiesArray = raw_cities.trim().split('\n');

export default citiesArray;