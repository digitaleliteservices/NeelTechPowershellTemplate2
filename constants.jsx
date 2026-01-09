
import React from 'react';
import { 
  Award, Briefcase, Clock, Headphones, Users, TrendingUp, 
  Terminal, Shield, Settings, Server, Code, FileCode, CheckCircle 
} from 'lucide-react';

export const TRANSLATIONS = {
  en: {
    nav_home: "Home",
    nav_about: "About Us",
    nav_syllabus: "Syllabus",
    nav_testimonials: "Success Stories",
    nav_faq: "FAQs",
    hero_badge: "Powershell Automation Training",
    hero_title: "POWERSHELL Automation Training",  //Course for Solutions Architect
    hero_sub: "Master professional PowerShell automation and Powershell Automation Training with intensive, hands-on labs designed for the modern cloud landscape.",
    btn_demo: "Join Free Demo",
    btn_syllabus: "View Full Syllabus",
    stats_success: "Success Rate",
    stats_students: "Students Trained",
    stats_placement: "Placement Rate",
    stats_support: "Support Available",
    why_title: "The Neel Technologies Advantage",
    why_sub: "We transcend traditional learning by embedding production-grade engineering into our core curriculum.",
    features_title: "High-Impact Learning Ecosystem",
    features_sub: "Engineered for senior architects and automation leads who demand absolute excellence.",
    curriculum_title: "Comprehensive Curriculum",
    curriculum_sub: "A multi-layered 9-module roadmap from automation fundamentals to cloud architecture scale.",
    batch_title: "Investment Plans",
    batch_sub: "Premium training modes designed to fit your unique professional schedule and career velocity.",
    contact_title: "Let's Connect",
    book_demo: "Book a Free Demo Session",
    whatsapp_chat: "Chat on WhatsApp",
    roi_title: "Success ROI Calculator",
    roi_salary_label: "Current Annual Salary (₹)",
    roi_exp_label: "Years of Experience",
    roi_hike_label: "Estimated Hike",
    roi_proj_label: "Projected Salary",
    roi_cta: "Claim Your 30% Batch Discount",
    about_title: "Leading IT Training Since 2020",
    about_sub: "Neel Technologies was founded with a mission to bridge the skill gap in cloud automation and infrastructure management. Over the last decade, we've evolved into a premier destination for PowerShell and AWS mastery.",
    about_mission: "Our Mission",
    about_mission_desc: "Empowering 10k+ architects by 2026 with production-ready skills.",
    about_quality: "Global Quality",
    about_quality_desc: "ISO 9001:2020 certified training methodology and labs.",
    faq_title: "Frequently Asked Questions",
    faq_search: "Search your questions...",
    success_stories_title: "Success Stories",
    success_stories_sub: "Join thousands of successful alumni working at top Fortune 500 companies.",
    avg_rating: "Average Rating",
    view_more: "View More Success Stories",
    view_less: "Show Less"
  },
  // hi: {
  //   nav_home: "मुख्य पृष्ठ",
  //   nav_about: "हमारे बारे में",
  //   nav_syllabus: "पाठ्यक्रम",
  //   nav_testimonials: "सफलता की कहानियां",
  //   nav_faq: "सामान्य प्रश्न",
  //   hero_badge: "AWS SAA-C03 प्रमाणित कोर्स",
  //   hero_title: "सॉल्यूशन्स आर्किटेक्ट के लिए पावरशेल ट्रेनिंग सर्टिफिकेशन कोर्स",
  //   hero_sub: "आधुनिक क्लाउड परिदृश्य के लिए डिज़ाइन किए गए गहन, व्यावहारिक लैब के साथ पेशेवर पावरशेल ऑटोमेशन और AWS सॉल्यूशन्स आर्किटेक्चर में महारत हासिल करें।",
  //   btn_demo: "फ्री डेमो बुक करें",
  //   btn_syllabus: "सिलेबस देखें",
  //   stats_success: "सफलता दर",
  //   stats_students: "प्रशिक्षित छात्र",
  //   stats_placement: "प्लेसमेंट दर",
  //   stats_support: "सपोर्ट उपलब्ध",
  //   why_title: "नील टेक्नोलॉजीज का लाभ",
  //   why_sub: "हम अपने मुख्य पाठ्यक्रम में प्रोडक्शन-ग्रेड इंजीनियरिंग को शामिल करके पारंपरिक शिक्षा से आगे बढ़ते हैं।",
  //   features_title: "हाई-इम्पैक्ट लर्निंग इकोसिस्टम",
  //   features_sub: "उन सीनियर आर्किटेक्ट्स और ऑटोमेशन लीड्स के लिए तैयार किया गया है जो पूर्ण उत्कृष्टता की मांग करते हैं।",
  //   curriculum_title: "व्यापक पाठ्यक्रम",
  //   curriculum_sub: "ऑटोमेशन के बुनियादी सिद्धांतों से लेकर क्लाउड आर्किटेक्चर स्केल तक एक बहु-स्तरित 9-मॉड्यूल रोडमैप।",
  //   batch_title: "इन्वेस्टमेंट प्लान्स",
  //   batch_sub: "आपकी विशिष्ट व्यावसायिक समय-सारणी और करियर वेग के अनुरूप डिज़ाइन किए गए प्रीमियम ट्रेनिंग मोड।",
  //   contact_title: "जुड़ें हमसे",
  //   book_demo: "फ्री डेमो सेशन बुक करें",
  //   whatsapp_chat: "व्हाट्सएप पर चैट करें",
  //   roi_title: "सफलता ROI कैलकुलेटर",
  //   roi_salary_label: "वर्तमान वार्षिक वेतन (₹)",
  //   roi_exp_label: "अनुभव के वर्ष",
  //   roi_hike_label: "अनुमानित वृद्धि",
  //   roi_proj_label: "अनुमानित वेतन",
  //   roi_cta: "अपना 30% बैच डिस्काउंट प्राप्त करें",
  //   about_title: "2020 से अग्रणी आईटी प्रशिक्षण",
  //   about_sub: "नील टेक्नोलॉजीज की स्थापना क्लाउड ऑटोमेशन और इंफ्रास्ट्रक्चर प्रबंधन में कौशल अंतर को पाटने के मिशन के साथ की गई थी। पिछले एक दशक में, हम पावरशेल और AWS महारत के लिए एक प्रमुख गंतव्य के रूप में विकसित हुए हैं।",
  //   about_mission: "हमारा मिशन",
  //   about_mission_desc: "2026 तक 10k+ आर्किटेक्ट्स को प्रोडक्शन-रेडी कौशल के साथ सशक्त बनाना।",
  //   about_quality: "वैश्विक गुणवत्ता",
  //   about_quality_desc: "ISO 9001:2015 प्रमाणित प्रशिक्षण पद्धति और लैब।",
  //   faq_title: "अक्सर पूछे जाने वाले प्रश्न",
  //   faq_search: "अपने प्रश्न खोजें...",
  //   success_stories_title: "सफलता की कहानियां",
  //   success_stories_sub: "शीर्ष फॉर्च्यून 500 कंपनियों में काम करने वाले हजारों सफल पूर्व छात्रों में शामिल हों।",
  //   avg_rating: "औसत रेटिंग",
  //   view_more: "और सफलता की कहानियां देखें",
  //   view_less: "कम दिखाएं"
  // }
};

export const SYLLABUS_MODULES = [
  {
    id: 1,
    title: "Introduction",
    description: "Fundamentals of PowerShell and its integration with AWS environment.",
    lessons: ["What is power shell","Power shell cm delts","Power shell Snapins","Power shell Modules","Power shell Remoting","Navigating Power shell"]
  },
  {
    id: 2,
    title: "PowerShell pipeline scripts and syntax",
    description: "Mastering the powerful pipeline feature to chain commands effectively.",
    lessons: ["Pipelines.","Scripts.","Syntax, outputs and scripts block."]
  },
  {
    id: 3,
    title: "Variables and data types",
    description: "Handling data structures and variables for complex automation tasks.",
    lessons: ["Variable and data types.","Variable scope.","Collection."]
  },
  {
    id: 4,
    title: "Security",
    description: "Ensuring secure script execution and secret management in cloud.",
    lessons: ["Script execution.","Signing Scripts.","Requesting credentials and using secure string.","Securing remote session."]
  },
  {
    id: 5,
    title: "Remote Management",
    description: "Managing AWS EC2 instances and remote servers through PowerShell.",
    lessons: ["Configuring Remote Management","Using power shell Remoting","Using jobs"]
  },
  {
    id: 6,
    title: "Script flow control statement",
    description: "Logic implementation using loops and conditional statements.",
    lessons: ["Foreach and for","While/Do/Do while","If/switch","Break/Continue"]
  },
  {
    id: 7,
    title: "Function, Filters and Modules",
    description: "Modularizing code for reusability and production-grade deployments.",
    lessons: ["Function and filters","Scripting with function and parameters","Modules"]
  },
  {
    id: 8,
    title: "Error Handling",
    description: "Building resilient scripts with robust error catching mechanisms.",
    lessons: ["Error","Script debugging"]
  },
  {
    id: 9,
    title: "Administrative uses",
    description: "Real-world AWS administrative scenarios and automation projects.",
    lessons: ["Mainpulating files and folders","Modifying registry data","Working with events","Working with active directory object"]
  }
];

export const WHY_CHOOSE_US = [
  { icon: <Award className="w-8 h-8" />, title: "AWS Certified Trainers", text: "Learn from industry veterans with decade-plus experience." },
  { icon: <Briefcase className="w-8 h-8" />, title: "Hands-on Projects", text: "Real-world AWS infrastructure automation projects." },
  { icon: <Clock className="w-8 h-8" />, title: "Flexible Schedule", text: "Weekend and weekday batches to suit your professional life." },
  { icon: <Headphones className="w-8 h-8" />, title: "24/7 Support", text: "Dedicated technical support desk for all your queries." },
  { icon: <Users className="w-8 h-8" />, title: "1:1 Mentorship", text: "Personalized guidance from trainers throughout the course." },
  { icon: <TrendingUp className="w-8 h-8" />, title: "Placement Assistance", text: "Resume building and mock interviews with hiring partners." },
];

export const COURSE_FEATURES = [
  { title: "Instructor-led Live Training", icon: <Users />, description: "Direct interaction with experts." },
  { title: "Hands-on Practical Training", icon: <Terminal />, description: "Learn by doing in virtual labs." },
  { title: "Trainer Support on WhatsApp", icon: <CheckCircle />, description: "Quick query resolution on the go." },
  { title: "Recorded Lectures on LMS", icon: <FileCode />, description: "Access recorded sessions anytime." },
  { title: "Access to Learning Portal", icon: <Server />, description: "Comprehensive study material." },
  { title: "Certificate from Neel Tech", icon: <Award />, description: "Industry recognized certification." },
  { title: "Job Openings Access", icon: <TrendingUp />, description: "Exclusive access to hiring forum." },
  { title: "Student Support Desk", icon: <Headphones />, description: "Dedicated help for administrative issues." }
];

export const TESTIMONIALS = [
  { id: 1, name: "Rahul Sharma", role: "Cloud Engineer", company: "TCS", text: "The PowerShell module transformed how I handle AWS operations. The hands-on labs are brilliant.", rating: 5, avatar: "placeholder_1" },
  { id: 2, name: "Priya V.", role: "Systems Admin", company: "Infosys", text: "Neel Technologies has the best instructors. They simplify complex AWS architect concepts effortlessly.", rating: 5, avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Priya" },
  { id: 3, name: "Arjun Mehta", role: "DevOps Architect", company: "Wipro", text: "Highly recommended for anyone looking to scale their career in AWS Automation. Exceptional support.", rating: 5, avatar: "placeholder_2" },
  { id: 4, name: "Siddharth N.", role: "Site Reliability Engineer", company: "Cognizant", text: "The curriculum is industry-aligned. I was able to automate 60% of my daily manual tasks using PowerShell after this course.", rating: 5, avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sid" },
  { id: 5, name: "Ananya K.", role: "AWS Architect", company: "Accenture", text: "The real-world project on resource tagging at scale helped me crack my architect interview. Amazing mentorship.", rating: 5, avatar: "placeholder_3" },
  { id: 6, name: "Vikram S.", role: "Senior Developer", company: "Amazon", text: "Professional and deep content. Even as someone with AWS experience, the PowerShell integration was a game changer for me.", rating: 5, avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Vik" }
];
