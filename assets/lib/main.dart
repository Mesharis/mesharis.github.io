import 'dart:convert';
import 'dart:io';
import 'package:carousel_slider/carousel_slider.dart';
import 'package:flutter/material.dart';
import 'package:flutter/services.dart';
import 'package:url_launcher/url_launcher.dart';
import 'package:url_strategy/url_strategy.dart';

void main() {
  setPathUrlStrategy();
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      debugShowCheckedModeBanner: false,
      title: 'Resume',
      theme: ThemeData(
        primarySwatch: Colors.grey,
      ),
      home: const MyHomePage(),
    );
  }
}

class MyHomePage extends StatefulWidget {
  const MyHomePage({super.key});

  @override
  State<MyHomePage> createState() => _MyHomePageState();
}

class _MyHomePageState extends State<MyHomePage>
    with TickerProviderStateMixin<MyHomePage> {
  CarouselController buttonCarouselController = CarouselController();
  ScrollController _controller = ScrollController();
  int popupMenuItemIndex = 0;

  @override
  void initState() {
    // TODO: implement initState
    super.initState();
    _controller = ScrollController();
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
        backgroundColor: Colors.white,
        body: SafeArea(
            child: Padding(
                padding: const EdgeInsets.all(10.0),
                child: SingleChildScrollView(
                  controller: _controller,
                  child: Column(
                    mainAxisAlignment: MainAxisAlignment.start,
                    crossAxisAlignment: CrossAxisAlignment.start,
                    children: <Widget>[
                      const Text('Meshari Suliman',
                          style: TextStyle(
                              fontSize: 15,
                              fontWeight: FontWeight.bold,
                              color: Colors.black)),
                      const SizedBox(
                        height: 5,
                      ),
                      const Text('Riyadh Region'),
                      const SizedBox(
                        height: 10,
                      ),
                      Row(
                        mainAxisAlignment: MainAxisAlignment.spaceBetween,
                        children: [
                          const SelectableText(
                              'Mesharisulimanalwehaibi@gmail.com'),
                          PopupMenuButton(
                            onSelected: (value) {
                              onMenuItemSelected(context, value as int);
                            },
                            itemBuilder: (ctx) => [
                              buildPopupMenuItem(
                                  title: 'send email',
                                  icon: Icons.email_outlined,
                                  position: Options.Send_Email.index),
                              buildPopupMenuItem(
                                  title: 'download resume',
                                  icon: Icons.arrow_downward,
                                  position: Options.download_resume.index),
                            ],
                          ),
                        ],
                      ),
                      const SizedBox(
                        height: 5,
                      ),
                      const Divider(
                        color: Colors.grey,
                      ),
                      const Text('Summary',
                          style: TextStyle(
                              fontSize: 15,
                              fontWeight: FontWeight.bold,
                              color: Colors.black)),
                      const SizedBox(
                        height: 5,
                      ),
                      const Text(
                          'I am interested in fintech and work in software development and I am looking to expand my knowledge and career in the IT sector'),
                      const SizedBox(
                        height: 5,
                      ),
                      const Divider(
                        color: Colors.grey,
                      ),
                      const Text('Experience',
                          style: TextStyle(
                              fontSize: 15,
                              fontWeight: FontWeight.bold,
                              color: Colors.black)),
                      const SizedBox(
                        height: 5,
                      ),
                      const Text(' Software Developer'),
                      const SizedBox(
                        height: 2,
                      ),
                      const Text('  Freelance'),
                      const SizedBox(
                        height: 5,
                      ),
                      const Text(' Business Development officer'),
                      const SizedBox(
                        height: 2,
                      ),
                      const Text('  MyFatoorah'),
                      const SizedBox(
                        height: 2,
                      ),
                      const Text('  Sales & Marketing'),
                      const SizedBox(
                        height: 2,
                      ),
                      const Text('  Sep 2019 - apr 2021'),
                      const SizedBox(
                        height: 5,
                      ),
                      const Text(' Sales Associate'),
                      const SizedBox(
                        height: 2,
                      ),
                      const Text('  Alshaya Group'),
                      const SizedBox(
                        height: 2,
                      ),
                      const Text('  Sales Associate at Pottery Barn'),
                      const SizedBox(
                        height: 2,
                      ),
                      const Text('  Jan 2017 - Jan 2018'),
                      const SizedBox(
                        height: 5,
                      ),
                      const Divider(
                        color: Colors.grey,
                      ),
                      const Text('Education',
                          style: TextStyle(
                              fontSize: 15,
                              fontWeight: FontWeight.bold,
                              color: Colors.black)),
                      const SizedBox(
                        height: 5,
                      ),
                      const Text(" Almaaly Schools"),
                      const Text("  high Schools, scientific"),
                      const SizedBox(
                        height: 5,
                      ),
                      const Divider(
                        color: Colors.grey,
                      ),
                      const Text('Skills',
                          style: TextStyle(
                              fontSize: 15,
                              fontWeight: FontWeight.bold,
                              color: Colors.black)),
                      const SizedBox(
                        height: 5,
                      ),
                      Row(
                        children: <Widget>[
                          Flexible(
                            child: Column(
                              crossAxisAlignment: CrossAxisAlignment.start,
                              children: const <Widget>[
                                Text(
                                    "- Communication - Direct Sales - Marketing - Banking - Business Development - Firebase - MySQL - PHP - Flutter - Code debugging"),
                              ],
                            ),
                          ),
                        ],
                      ),
//                      const SizedBox(
//                         height: 5,
//                       ),
//                       const Divider(
//                         color: Colors.grey,
//                       ),
//                      const Text('Flutter Projects',
//                           style: TextStyle(
//                               fontSize: 15,
//                               fontWeight: FontWeight.bold,
//                               color: Colors.black)),
//                       const SizedBox(
//                         height: 5,
//                       ),
//                      CarouselSlider(
//                         carouselController: buttonCarouselController,
//                         options: CarouselOptions(
//                             autoPlayInterval:const Duration(seconds: 15),
//                             autoPlayAnimationDuration:const Duration(milliseconds: 600),
//                             height: MediaQuery.of(context).size.height * (250 / 812),
//                             enableInfiniteScroll: true,
//                             autoPlay: true,
//                             viewportFraction: 1),
//                         items: sliderCells([
//                           AdsModel(
//                               image: 'lib/HealthE_club.png',
//                               onTap: () {},
//                               dec: 'Health E- club'),
//                           AdsModel(
//                               image: 'lib/Get-Tor.png',
//                               onTap: () {},
//                               dec: 'Get tor'),
//                           AdsModel(
//                               image: 'lib/FAZAA.png',
//                               onTap: () {},
//                               dec: 'Fazaa'),
//                           AdsModel(
//                               image: 'lib/slot.png', onTap: () {}, dec: 'Slot'),
//                           AdsModel(
//                               image: 'lib/Call.png',
//                               onTap: () {},
//                               dec: 'Call Sample'),
//                           AdsModel(
//                               image: 'lib/payment.png',
//                               onTap: () {},
//                               dec: 'Electronic payments'),
//                         ]),
//                       ),
//                       Row(
//                         mainAxisAlignment: MainAxisAlignment.center,
//                         children: [
//                           TextButton(
//                             onPressed: () => buttonCarouselController.nextPage(
//                                 duration: const Duration(milliseconds: 300),
//                                 curve: Curves.linear),
//                             child: const Text("Next ",
//                                 style: TextStyle(
//                                     fontSize: 15,
//                                     fontWeight: FontWeight.bold,
//                                     color: Colors.black)),
//                           ),
//                         ],
//                       )
                    ],
                  ),
                ))),
        floatingActionButton: FloatingActionButton(
          foregroundColor: Colors.white,
          backgroundColor: Colors.white,
          onPressed: _scrollDown,
          tooltip: 'Down',
          child: const Icon(Icons.arrow_downward, color: Colors.grey, size: 50),
        ),
        bottomNavigationBar: SizedBox(
          height: 40,
          child: Column(
            children: const [
              Divider(
                color: Colors.grey,
              ),
              Text(
                "Resume Meshari Suliman | ©2023 ",
                textAlign: TextAlign.center,
              ),
            ],
          ),
        ));
}

  onMenuItemSelected(context, int value) {
    popupMenuItemIndex = value;
    if (value == Options.Send_Email.index) {
      email();
    } else if (value == Options.download_resume.index) {
      openPdfFromUrl();
    }
  }
  PopupMenuItem buildPopupMenuItem({required String title, dynamic icon, required int position}) {
    return PopupMenuItem(
      value: position,
      child: Row(
        mainAxisAlignment: MainAxisAlignment.spaceBetween,
        children: [Text(title), Icon(icon)],
      ),
    );
  }

  void email() async {
    String? encodeQueryParameters(Map<String, String> params) {
      return params.entries
          .map((MapEntry<String, String> e) =>
              '${Uri.encodeComponent(e.key)}=${Uri.encodeComponent(e.value)}')
          .join('&');
    }

    final Uri emailLaunchUri = Uri(
      scheme: 'mailto',
      path: 'Mesharisulimanalwehaibi@gmail.com',
      query: encodeQueryParameters(<String, String>{
        'subject': 'Example Subject & Hello Meshari!',
        'body': 'Hi!',
      }),
    );
    launchUrl(emailLaunchUri);
    if (await launchUrl(emailLaunchUri)) {
      const snackBar = SnackBar(
        content: Text('email app opened'),
      );
      ScaffoldMessenger.of(context).showSnackBar(snackBar);
    } else {
      Clipboard.setData(
          const ClipboardData(text: "Mesharisulimanalwehaibi@gmail.com"));
      const snackBar = SnackBar(
        content: Text('copy email done'),
      );
      ScaffoldMessenger.of(context).showSnackBar(snackBar);
    }
  }
  void openPdfFromUrl() {
    var googleDocsUrl = 'assets/lib/Resume.pdf';
    final Uri uri = Uri.parse(googleDocsUrl);
    launchUrl(uri);
  }
  void _scrollDown() {
    _controller.animateTo(
      _controller.position.maxScrollExtent,
      duration: const Duration(seconds: 2),
      curve: Curves.fastOutSlowIn,
    );
  }
  List<Widget> sliderCells(List<AdsModel> ads) {
    List<Widget> items = [];
    var itemsCount = ads.length - 1;
    for (var i = 0; i <= itemsCount; i++) {
      items.add(Builder(
        builder: (BuildContext context) {
          return Stack(
            children: [
              InkWell(
                  onTap: ads[i].onTap,
                  child: Row(
                    mainAxisAlignment: MainAxisAlignment.spaceEvenly,
                    children: [
                      Container(
                        clipBehavior: Clip.antiAliasWithSaveLayer,
                        decoration: const BoxDecoration(
                          borderRadius: BorderRadius.only(
                              bottomLeft: Radius.circular(15),
                              bottomRight: Radius.circular(15)),
                        ),
                        child: Image.asset(
                          ads[i].image,
                          fit: BoxFit.cover,
                        ),
                      ),
                      Flexible(
                        child: Column(
                          crossAxisAlignment: CrossAxisAlignment.start,
                          children: <Widget>[
                            Text(ads[i].dec),
                          ],
                        ),
                      )
                    ],
                  ))
            ],
          );
        },
      ));
    }
    return items;
  }
}


enum Options {
  Send_Email,
  download_resume,
}
AdsModel adsModelFromJson(String str) => AdsModel.fromJson(json.decode(str));
class AdsModel {
  AdsModel({
    required this.image,
    required this.onTap,
    required this.dec,
  });

  String image;
  dynamic onTap;
  String dec;

  factory AdsModel.fromJson(Map<String, dynamic> json) => AdsModel(
        image: json["image"],
        onTap: json["onTap"],
        dec: json["dec"],
      );
}
