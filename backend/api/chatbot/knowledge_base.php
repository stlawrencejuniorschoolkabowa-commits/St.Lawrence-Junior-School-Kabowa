<?php
/**
 * St. Lawrence School AI Assistant - Knowledge Base
 * This file contains all the information the chatbot can answer
 */

class KnowledgeBase {
    
    private $knowledge = [];
    
    public function __construct() {
        $this->buildKnowledgeBase();
    }
    
    private function buildKnowledgeBase() {
        
        // SCHOOL INFORMATION
        $this->knowledge['school_info'] = [
            'keywords' => ['about', 'school', 'information', 'who are you', 'tell me about', 'history', 'founded', 'established', 'years', 'experience', 'old', 'age', 'since when', 'how long', 'premier', 'quality'],
            'response' => "St. Lawrence Junior School - Kabowa is a premier mixed day and boarding primary school offering quality education since 2010. With over 14 years of experience, we provide a nurturing environment where excellence meets innovation. Our school offers both nursery and primary education with modern facilities and experienced teachers dedicated to your child's success. We are located in Kabowa, Kampala, and serve families from across the city."
        ];
        
        // YEARS OF EXPERIENCE
        $this->knowledge['experience'] = [
            'keywords' => ['years of experience', 'how long', 'established', 'founded', 'since when', 'how old', 'age of school', 'experience', 'years in operation'],
            'response' => "🎓 **Years of Experience:**\n\nSt. Lawrence Junior School - Kabowa was established in 2010. We have been providing quality education for over 14 years! Our experience includes:\n\n✅ 14+ years of academic excellence\n✅ Hundreds of successful graduates\n✅ Consistent excellent PLE results\n✅ Award-winning programs\n✅ Trusted by families across Kampala\n\nOur long-standing reputation is built on dedication, quality teaching, and student success!"
        ];
        
        // CONTACT INFORMATION
        $this->knowledge['contact'] = [
            'keywords' => ['contact', 'phone', 'email', 'address', 'location', 'reach', 'call', 'telephone', 'where are you', 'phone number', 'email address', 'physical address', 'find you', 'located', 'where is', 'kabowa', 'kampala', 'rubaga', 'church zone'],
            'response' => "📍 **Contact Information:**\n\n📧 Email: stlawrencejuniorschoolkabowa@gmail.com\n📧 Alternative: st.lawrence.juniorschool@yahoo.com\n📞 Phone: +256 701 420 506\n📞 Phone: +256 772 420 506\n📮 P.O. Box: 36198, Kampala\n📍 Location: Kabowa, Church Zone, Rubaga Division - Kampala District, Uganda\n\nFeel free to reach out to us anytime!"
        ];
        
        // LOCATION DETAILS
        $this->knowledge['location'] = [
            'keywords' => ['where', 'location', 'address', 'find', 'directions', 'how to get', 'where located', 'situated', 'place', 'area', 'zone', 'division', 'district', 'kabowa', 'rubaga', 'church zone'],
            'response' => "📍 **School Location:**\n\n🏫 St. Lawrence Junior School - Kabowa\n📍 Kabowa, Church Zone\n📍 Rubaga Division\n📍 Kampala District, Uganda\n\n📮 Postal Address: P.O. Box 36198, Kampala\n\n📞 For directions, call us:\n+256 701 420 506\n+256 772 420 506\n\nWe are easily accessible from Kampala city center!"
        ];
        
        // SCHOOL HOURS
        $this->knowledge['hours'] = [
            'keywords' => ['hours', 'time', 'open', 'close', 'schedule', 'timing', 'when do you open', 'operating hours', 'what time', 'opening time', 'closing time', 'school time', 'start time', 'end time', 'working hours', 'office hours'],
            'response' => "⏰ **School Hours:**\n\nMonday - Friday: 7:00 AM - 5:00 PM\nSaturday: 8:00 AM - 1:00 PM (Sports & Extra Activities)\nSunday: Closed\n\nOffice Hours: 8:00 AM - 4:00 PM (Weekdays)\n\nFor boarding students, we provide 24/7 supervision and care."
        ];
        
        // ADMISSION PROCESS
        $this->knowledge['admission'] = [
            'keywords' => ['admission', 'apply', 'enroll', 'join', 'register', 'application', 'how to apply', 'enrollment', 'admissions'],
            'response' => "📝 **Admission Process:**\n\n1. **Visit Our School** - Schedule a tour to see our facilities\n2. **Obtain Application Form** - Available at the school office or download from our website\n3. **Submit Documents:**\n   - Birth certificate\n   - Passport photos (2)\n   - Previous school report (if applicable)\n   - Immunization card\n4. **Interview & Assessment** - Meet with our admissions team\n5. **Receive Admission Letter**\n6. **Pay Fees & Complete Registration**\n\nAdmissions are open throughout the year! Visit our Admission page for more details or call us at +256 701 420 506."
        ];
        
        // SCHOOL FEES - COMPLETE (DAY & BOARDING)
        $this->knowledge['fees_complete'] = [
            'keywords' => ['fees', 'cost', 'tuition', 'price', 'how much', 'payment', 'school fees', 'tuition fees', 'pay', 'charges', 'amount', 'money', 'expensive', 'cheap', 'affordable', 'pricing', 'fee structure'],
            'response' => "💰 **School Fees Structure (Per Term):**\n\n**DAY SCHOLARS:**\n🎒 Nursery (Baby - Top Class): UGX 474,000\n📚 P1 - P5: UGX 579,000\n🎓 P6 - P7: UGX 629,000\n\n**BOARDING:**\n🏠 Nursery (Baby - Top Class): UGX 894,000\n📚 P1 - P5: UGX 1,019,000\n🎓 P6 - P7: UGX 1,094,000\n\n**Payment:** Per term (3 terms per year)\n\nDay scholar fees include tuition, meals, and learning materials. Boarding fees include accommodation, meals, 24/7 supervision, and all learning materials. Our boarding facilities are modern and secure!"
        ];
        
        // SCHOOL FEES - DAY SCHOLARS ONLY
        $this->knowledge['fees_day'] = [
            'keywords' => ['day scholar fees', 'day student fees', 'day scholar cost', 'day scholar price', 'day scholar tuition', 'non-boarding fees'],
            'response' => "💰 **School Fees (Day Scholars - Per Term):**\n\n🎒 **Nursery (Baby - Top Class):** UGX 474,000\n📚 **P1 - P5:** UGX 579,000\n🎓 **P6 - P7:** UGX 629,000\n\n**Payment:** Per term (3 terms per year)\n\nFees include tuition, meals, and learning materials. For boarding fees, please ask!"
        ];
        
        // SCHOOL FEES - BOARDING ONLY
        $this->knowledge['fees_boarding'] = [
            'keywords' => ['boarding fees', 'boarding cost', 'boarding price', 'boarding student', 'boarder', 'boarding tuition', 'boarding charges'],
            'response' => "💰 **School Fees (Boarding - Per Term):**\n\n🏠 **Nursery (Baby - Top Class):** UGX 894,000\n📚 **P1 - P5:** UGX 1,019,000\n🎓 **P6 - P7:** UGX 1,094,000\n\n**Payment:** Per term (3 terms per year)\n\nBoarding fees include accommodation, meals, 24/7 supervision, and all learning materials. Our boarding facilities are modern and secure with separate houses for boys and girls!"
        ];
        
        // UNIFORMS
        $this->knowledge['uniforms'] = [
            'keywords' => ['uniform', 'dress code', 'clothing', 'attire', 'what to wear', 'uniforms', 'dress', 'clothes', 'outfit', 'school uniform', 'uniform price', 'uniform cost', 'uniform fees'],
            'response' => "👔 **School Uniforms:**\n\n**Day Scholars (Boys):**\n- Nur-P2: UGX 200,000\n- P3-P5: UGX 240,000\n- P6-P7: UGX 300,000\n\n**Day Scholars (Girls):**\n- Nur-P2: UGX 190,000\n- P3-P5: UGX 230,000\n- P6-P7: UGX 270,000\n\n**Boarding Students:** Slightly higher (includes extra sets)\n\nUniforms include shirts/blouses, shorts/skirts, sweater, socks, and school tie. Available for purchase at the school."
        ];
        
        // PROGRAMS OFFERED
        $this->knowledge['programs'] = [
            'keywords' => ['programs', 'classes', 'levels', 'grades', 'what do you offer', 'curriculum'],
            'response' => "📚 **Programs Offered:**\n\n🎨 **Nursery Section:**\n- Baby Class\n- Middle Class\n- Top Class\n\n📖 **Primary Section:**\n- Primary 1 - Primary 7\n\n**Options:**\n✅ Day Scholars\n✅ Boarding (Full boarding facilities)\n\nWe follow the Ugandan National Curriculum with enhanced learning programs including computer studies, music, sports, and arts."
        ];
        
        // EXTRACURRICULAR ACTIVITIES
        $this->knowledge['activities'] = [
            'keywords' => ['activities', 'extracurricular', 'sports', 'clubs', 'games', 'music', 'drama', 'what activities'],
            'response' => "🎯 **Extracurricular Activities:**\n\n⚽ **Sports:**\n- Football\n- Netball\n- Athletics\n- Swimming\n\n🎨 **Arts & Culture:**\n- Music & Dance\n- Drama & Theatre\n- Art & Crafts\n\n📚 **Academic Clubs:**\n- Debate Club\n- Science Club\n- Reading Club\n- Computer Club\n\n🏆 **Competitions:**\n- Inter-school sports\n- Music festivals\n- Academic competitions\n\nWe believe in holistic education - developing both mind and body!"
        ];
        
        // FACILITIES
        $this->knowledge['facilities'] = [
            'keywords' => ['facilities', 'infrastructure', 'buildings', 'library', 'computer lab', 'playground', 'what do you have'],
            'response' => "🏫 **Our Facilities:**\n\n📚 **Library** - Well-stocked with books and digital resources\n💻 **Computer Lab** - Modern computers with internet\n🔬 **Science Lab** - Equipped for practical learning\n🏃 **Sports Grounds** - Football field, netball court\n🏠 **Boarding Houses** - Separate for boys and girls\n🍽️ **Dining Hall** - Nutritious meals prepared daily\n🚌 **Transport** - School buses available\n🏥 **Sick Bay** - First aid and medical care\n🎨 **Art Room** - Creative learning space\n\nAll facilities are modern, safe, and well-maintained!"
        ];
        
        // TEACHERS
        $this->knowledge['teachers'] = [
            'keywords' => ['teachers', 'staff', 'instructors', 'educators', 'qualified', 'experienced'],
            'response' => "👨‍🏫 **Our Teachers:**\n\nWe have a team of highly qualified and experienced teachers who are passionate about education. Our staff includes:\n\n✅ Certified teachers with degrees and diplomas\n✅ Specialized subject teachers\n✅ Experienced nursery care providers\n✅ Sports coaches and activity coordinators\n✅ Guidance and counseling staff\n\nOur teacher-to-student ratio ensures personalized attention for every child. Visit our Teachers page to meet our dedicated team!"
        ];
        
        // LIBRARY
        $this->knowledge['library'] = [
            'keywords' => ['library', 'books', 'reading', 'study materials', 'resources'],
            'response' => "📚 **School Library:**\n\nOur library is a treasure trove of knowledge with:\n\n📖 Over 2,000 books covering various subjects\n📰 Newspapers and magazines\n💻 Digital resources and e-books\n🪑 Quiet study areas\n👥 Group discussion spaces\n\n**Library Hours:**\nMonday - Friday: 8:00 AM - 4:00 PM\nSaturday: 9:00 AM - 12:00 PM\n\nStudents can borrow books and access research materials. We encourage a culture of reading!"
        ];
        
        // MEALS
        $this->knowledge['meals'] = [
            'keywords' => ['meals', 'food', 'lunch', 'breakfast', 'dinner', 'nutrition', 'cafeteria', 'dining'],
            'response' => "🍽️ **Meals & Nutrition:**\n\n**Day Scholars:**\n- Mid-morning snack\n- Lunch\n\n**Boarding Students:**\n- Breakfast\n- Mid-morning snack\n- Lunch\n- Afternoon snack\n- Dinner\n\nAll meals are:\n✅ Nutritious and balanced\n✅ Prepared by trained cooks\n✅ Served in a clean dining hall\n✅ Supervised by staff\n\nWe cater to special dietary needs. Our menu is designed by nutritionists to support growing children!"
        ];
        
        // TRANSPORT
        $this->knowledge['transport'] = [
            'keywords' => ['transport', 'bus', 'school bus', 'pick up', 'drop off', 'transportation'],
            'response' => "🚌 **School Transport:**\n\nWe provide safe and reliable school transport services:\n\n✅ Modern school buses\n✅ Experienced drivers\n✅ Designated routes covering major areas\n✅ Morning pick-up and afternoon drop-off\n✅ Supervised by staff\n\n**Routes cover:**\n- Kampala Central\n- Nateete\n- Busega\n- Lubaga\n- And surrounding areas\n\nTransport fees are separate from tuition. Contact us for route details and pricing!"
        ];
        
        // SECURITY
        $this->knowledge['security'] = [
            'keywords' => ['security', 'safety', 'safe', 'protection', 'guards', 'secure'],
            'response' => "🔒 **Safety & Security:**\n\nYour child's safety is our top priority:\n\n✅ 24/7 security guards\n✅ CCTV surveillance\n✅ Controlled access gates\n✅ Visitor registration system\n✅ Fire safety equipment\n✅ First aid facilities\n✅ Emergency response procedures\n✅ Trained staff for child protection\n\nFor boarding students, we provide round-the-clock supervision. Our campus is fully fenced and secure!"
        ];
        
        // PARENT INVOLVEMENT
        $this->knowledge['parents'] = [
            'keywords' => ['parent', 'parents', 'involvement', 'meetings', 'communication', 'updates'],
            'response' => "👨‍👩‍👧‍👦 **Parent Involvement:**\n\nWe believe in strong parent-school partnerships:\n\n📅 **Parent-Teacher Meetings** - Every term\n📊 **Progress Reports** - Sent home regularly\n📱 **Communication** - Phone calls, SMS, WhatsApp groups\n🎉 **School Events** - Parents invited to participate\n👥 **PTA Meetings** - Active Parent-Teacher Association\n\nWe keep parents informed about their child's progress, behavior, and school activities. Your involvement is valued!"
        ];
        
        // TERM DATES
        $this->knowledge['term_dates'] = [
            'keywords' => ['term', 'semester', 'calendar', 'academic calendar', 'when does school start', 'holidays'],
            'response' => "📅 **Academic Calendar:**\n\nWe follow a 3-term academic year:\n\n**Term 1:** February - April\n**Term 2:** May - August\n**Term 3:** September - November\n\n**Holidays:**\n- December - January (Long holiday)\n- Short breaks between terms\n\nExact dates are communicated at the beginning of each year. Contact us for the current academic calendar!"
        ];
        
        // ACHIEVEMENTS
        $this->knowledge['achievements'] = [
            'keywords' => ['achievements', 'awards', 'performance', 'results', 'success', 'excellence'],
            'response' => "🏆 **Our Achievements:**\n\nWe're proud of our students' accomplishments:\n\n✅ Consistent excellent PLE results\n✅ Winners in inter-school competitions\n✅ Music and dance festival awards\n✅ Sports championships\n✅ Academic excellence awards\n✅ Community service recognition\n\nOur students have been admitted to top secondary schools in Uganda. We celebrate every child's unique talents and achievements!"
        ];
        
        // SPECIAL NEEDS
        $this->knowledge['special_needs'] = [
            'keywords' => ['special needs', 'disability', 'inclusive', 'learning difficulties', 'support'],
            'response' => "♿ **Special Needs Support:**\n\nWe are committed to inclusive education:\n\n✅ Individualized learning plans\n✅ Trained special needs teachers\n✅ Accessible facilities\n✅ Extra support for learning difficulties\n✅ Counseling services\n✅ Small class sizes for attention\n\nWe assess each child's needs and provide appropriate support. Please contact us to discuss your child's specific requirements!"
        ];
        
        // VISITING THE SCHOOL
        $this->knowledge['visit'] = [
            'keywords' => ['visit', 'tour', 'see the school', 'come to school', 'schedule a visit'],
            'response' => "🏫 **Visit Our School:**\n\nWe'd love to show you around!\n\n📞 **Schedule a Tour:**\nCall: +256 701 420 506 / +256 772 420 506\nEmail: stlawrencejuniorschoolkabowa@gmail.com\n\n**What to expect:**\n✅ Guided tour of facilities\n✅ Meet the headteacher\n✅ See classrooms in action\n✅ Ask questions\n✅ Get admission information\n\n**Best times to visit:**\nMonday - Friday: 9:00 AM - 3:00 PM\nSaturday: 9:00 AM - 12:00 PM\n\nNo appointment needed, but calling ahead ensures we're ready to welcome you!"
        ];
        
        // GREETING RESPONSES
        $this->knowledge['greeting'] = [
            'keywords' => ['hello', 'hi', 'hey', 'good morning', 'good afternoon', 'good evening', 'greetings'],
            'response' => "Hello! 👋 Welcome to St. Lawrence Junior School - Kabowa! I'm your virtual assistant, here to help you with any questions about our school. How can I assist you today?"
        ];
        
        // DETAILED LOCATION INFORMATION
        $this->knowledge['location_detailed'] = [
            'keywords' => ['where exactly', 'exact location', 'directions', 'how to get there', 'how to find', 'map', 'google maps', 'landmarks', 'nearby'],
            'response' => "📍 **Detailed Location Information:**\n\n**Address:**\nSt. Lawrence Junior School - Kabowa\nKabowa, Kampala\nP.O. BOX 36198, KAMPALA\nUganda\n\n**Area:** Kabowa is located in Rubaga Division, Kampala\n\n**Nearby Landmarks:**\n- Close to Kabowa Market\n- Near Nateete Road\n- Accessible from Kampala-Masaka Road\n\n**How to Get Here:**\n- From Kampala City: Take Nateete Road towards Busega, turn at Kabowa\n- Public Transport: Taxis to Nateete/Busega, then boda to Kabowa\n- Private Car: Ample parking available on campus\n\n**GPS Coordinates:** Available upon request\n\nFor specific directions, call us at +256 701 420 506 and we'll guide you!"
        ];
        
        // HEADTEACHER/PRINCIPAL INFORMATION
        $this->knowledge['headteacher'] = [
            'keywords' => ['headteacher', 'principal', 'head teacher', 'director', 'head of school', 'school head', 'who is in charge', 'school leader'],
            'response' => "👨‍💼 **School Leadership:**\n\nOur school is led by an experienced and dedicated headteacher who oversees all academic and administrative operations. Our leadership team includes:\n\n✅ **Headteacher** - Overall school management and academic excellence\n✅ **Deputy Headteacher** - Academic programs and curriculum\n✅ **Director of Studies** - Teaching quality and student performance\n✅ **Boarding Master/Mistress** - Boarding student welfare\n✅ **Discipline Master/Mistress** - Student conduct and behavior\n\nOur leadership team has decades of combined experience in education and is committed to providing the best learning environment for every child.\n\nTo schedule a meeting with the headteacher, call +256 701 420 506."
        ];
        
        // TEACHERS DETAILED INFORMATION
        $this->knowledge['teachers_detailed'] = [
            'keywords' => ['teachers', 'staff', 'instructors', 'educators', 'qualified', 'experienced', 'teaching staff', 'faculty', 'how many teachers', 'teacher qualifications', 'teacher experience'],
            'response' => "👨‍🏫 **Our Teaching Staff:**\n\nWe have a team of **30+ highly qualified teachers** who are passionate about education:\n\n**Qualifications:**\n✅ Bachelor's Degrees in Education\n✅ Diplomas in Primary Education\n✅ Specialized subject certifications\n✅ Early Childhood Education certificates\n✅ Continuous professional development\n\n**Experience:**\n✅ Average 8+ years teaching experience\n✅ Trained in modern teaching methods\n✅ Child psychology and development training\n✅ First aid certified\n\n**Specializations:**\n📚 **Subject Teachers:** Mathematics, English, Science, Social Studies\n🎨 **Special Teachers:** Music, Art, Physical Education, Computer Studies\n👶 **Nursery Teachers:** Early childhood specialists\n🏠 **Boarding Staff:** Matrons and patrons for boarding students\n📖 **Support Staff:** Librarian, Lab technician, Counselor\n\n**Teacher-Student Ratio:** 1:25 (ensures personalized attention)\n\nVisit our Teachers page on the website to meet our dedicated team!"
        ];
        
        // CONTACT PERSON INFORMATION
        $this->knowledge['contact_person'] = [
            'keywords' => ['who can i talk to', 'contact person', 'who to call', 'who to speak with', 'admissions officer', 'bursar', 'accountant', 'who handles'],
            'response' => "📞 **Key Contact Persons:**\n\n**For Admissions & Enrollment:**\n👤 Admissions Officer\n📞 +256 701 420 506 / +256 772 420 506\n📧 stlawrencejuniorschoolkabowa@gmail.com\n\n**For Fees & Payments:**\n👤 School Bursar/Accountant\n📞 +256 701 420 506\n⏰ Available: Mon-Fri 8AM-4PM\n\n**For Academic Matters:**\n👤 Director of Studies\n📞 +256 701 420 506\n📧 st.lawrence.juniorschool@yahoo.com\n\n**For Boarding Inquiries:**\n👤 Boarding Master/Mistress\n📞 +256 772 420 506\n\n**For General Inquiries:**\n👤 School Secretary\n📞 +256 701 420 506 / +256 772 420 506\n⏰ Office Hours: Mon-Fri 8AM-4PM\n\nAll staff are friendly and ready to assist you!"
        ];
        
        // SCHOOL EMAIL ADDRESSES
        $this->knowledge['email_addresses'] = [
            'keywords' => ['email', 'email address', 'send email', 'write to', 'contact email', 'official email'],
            'response' => "📧 **Official Email Addresses:**\n\n**Primary Email:**\nstlawrencejuniorschoolkabowa@gmail.com\n(For all general inquiries, admissions, and information)\n\n**Alternative Email:**\nst.lawrence.juniorschool@yahoo.com\n(For academic matters and official correspondence)\n\n**Response Time:**\n✅ We typically respond within 24 hours during weekdays\n✅ For urgent matters, please call: +256 701 420 506\n\n**What to Include in Your Email:**\n- Your name and contact information\n- Subject of inquiry (Admission, Fees, Programs, etc.)\n- Specific questions or information needed\n- Best time to call you back (if needed)\n\nWe look forward to hearing from you!"
        ];
        
        // PHONE NUMBERS DETAILED
        $this->knowledge['phone_numbers'] = [
            'keywords' => ['phone number', 'telephone', 'call', 'mobile', 'contact number', 'phone', 'telephone number', 'hotline'],
            'response' => "📱 **Contact Phone Numbers:**\n\n**Main Lines:**\n📞 +256 701 420 506 (MTN)\n📞 +256 772 420 506 (Airtel)\n\n**Available:**\n⏰ Monday - Friday: 7:00 AM - 5:00 PM\n⏰ Saturday: 8:00 AM - 1:00 PM\n⏰ Sunday: Closed (Emergency only)\n\n**What You Can Call About:**\n✅ Admissions and enrollment\n✅ School fees and payments\n✅ Academic programs and curriculum\n✅ Boarding facilities\n✅ School tours and visits\n✅ General inquiries\n✅ Emergency matters (24/7 for boarding parents)\n\n**Tips for Calling:**\n- Best time: 9AM-12PM or 2PM-4PM (weekdays)\n- Have your questions ready\n- Ask for specific department if needed\n- Request callback if lines are busy\n\nWe're always happy to hear from you!"
        ];
        
        // OFFICE LOCATION ON CAMPUS
        $this->knowledge['office_location'] = [
            'keywords' => ['office', 'administration', 'admin office', 'where is the office', 'reception', 'front desk'],
            'response' => "🏢 **Administration Office Location:**\n\n**Main Office:**\nLocated at the entrance of the school campus\nEasily accessible from the main gate\n\n**Office Hours:**\n⏰ Monday - Friday: 8:00 AM - 4:00 PM\n⏰ Saturday: 9:00 AM - 12:00 PM\n⏰ Sunday: Closed\n\n**Services Available:**\n✅ Admissions and enrollment\n✅ Fee payments and receipts\n✅ Student records and transcripts\n✅ General information\n✅ Complaint and suggestion box\n✅ Lost and found\n\n**Reception Staff:**\nOur friendly reception staff will welcome you and direct you to the appropriate department or person.\n\n**Visitor Procedure:**\n1. Report to reception/security at main gate\n2. Sign visitor's book\n3. State purpose of visit\n4. Receive visitor's badge\n5. Be directed to relevant office/person\n\nWalk-ins welcome during office hours!"
        ];
        
        // SOCIAL MEDIA & ONLINE PRESENCE
        $this->knowledge['social_media'] = [
            'keywords' => ['facebook', 'social media', 'instagram', 'twitter', 'whatsapp', 'online', 'website', 'social'],
            'response' => "🌐 **Connect With Us Online:**\n\n**Website:**\nwww.stlawrencejuniorschool.com (Coming soon!)\n\n**Email:**\n📧 stlawrencejuniorschoolkabowa@gmail.com\n📧 st.lawrence.juniorschool@yahoo.com\n\n**Phone/WhatsApp:**\n📱 +256 701 420 506\n📱 +256 772 420 506\n\n**Social Media:**\nWe're working on establishing our social media presence!\nFor now, the best way to reach us is:\n- Phone calls\n- WhatsApp messages\n- Email\n- Visit us in person\n\n**Stay Updated:**\nContact us to be added to our parent communication groups where we share:\n✅ School announcements\n✅ Event updates\n✅ Academic calendars\n✅ Important notices\n✅ Photo galleries\n\nCall +256 701 420 506 to stay connected!"
        ];
        
        // STAFF DEPARTMENTS
        $this->knowledge['staff_departments'] = [
            'keywords' => ['departments', 'sections', 'who handles what', 'staff structure', 'organization'],
            'response' => "🏫 **School Departments & Staff:**\n\n**Academic Department:**\n👨‍🏫 Headteacher - Overall leadership\n👨‍🏫 Deputy Headteacher - Academic programs\n👨‍🏫 Director of Studies - Curriculum & teaching\n👨‍🏫 Subject Teachers - Specialized instruction\n👨‍🏫 Class Teachers - Primary class management\n\n**Administration:**\n👤 School Secretary - Office management\n👤 Bursar/Accountant - Fees & finances\n👤 Receptionist - Visitor services\n\n**Student Welfare:**\n👤 Boarding Master/Mistress - Boarding students\n👤 Discipline Master/Mistress - Student conduct\n👤 School Counselor - Guidance & support\n👤 School Nurse - Health services\n\n**Support Services:**\n👤 Librarian - Library management\n👤 Lab Technician - Science lab\n👤 IT Coordinator - Computer lab\n👤 Sports Coach - Physical education\n👤 Music Teacher - Arts & music\n\n**Operations:**\n👤 Security Guards - Campus safety (24/7)\n👤 Cooks - Meal preparation\n👤 Cleaners - Facility maintenance\n👤 Drivers - School transport\n\nTotal Staff: 50+ dedicated professionals!"
        ];
        
        // THANK YOU RESPONSES
        $this->knowledge['thanks'] = [
            'keywords' => ['thank you', 'thanks', 'appreciate', 'grateful'],
            'response' => "You're very welcome! 😊 If you have any more questions about St. Lawrence Junior School, feel free to ask. We're here to help!"
        ];
        
        // GOODBYE RESPONSES
        $this->knowledge['goodbye'] = [
            'keywords' => ['bye', 'goodbye', 'see you', 'later', 'thanks bye'],
            'response' => "Goodbye! 👋 Thank you for your interest in St. Lawrence Junior School - Kabowa. We hope to see you soon! For more information, call us at +256 701 420 506."
        ];
        
        // ACADEMIC PERFORMANCE & RESULTS
        $this->knowledge['academic_performance'] = [
            'keywords' => ['results', 'performance', 'grades', 'marks', 'academic results', 'ple results', 'exam results', 'how do students perform', 'pass rate', 'success rate', 'academic excellence'],
            'response' => "📊 **Academic Performance & Results:**\n\n🏆 **Our Track Record:**\n✅ **95%+ PLE Pass Rate** annually\n✅ **80%+ First Grade** achievements\n✅ Students admitted to **top secondary schools**\n✅ **Consistent improvement** in national rankings\n✅ **Subject excellence** in Mathematics, English, Science\n\n📈 **What Makes Us Successful:**\n✅ Qualified and experienced teachers\n✅ Small class sizes (max 30 students)\n✅ Regular assessments and feedback\n✅ Extra coaching for weak students\n✅ Mock exams and practice tests\n✅ Individual attention to each student\n\n🎯 **Recent Achievements:**\n- Top performer in district competitions\n- Multiple students with aggregate 4-8 in PLE\n- 100% literacy rate by P.3\n- Excellence in Science and Mathematics\n\nWe're committed to academic excellence for every child!"
        ];
        
        // CURRICULUM & SUBJECTS
        $this->knowledge['curriculum'] = [
            'keywords' => ['curriculum', 'subjects', 'what do you teach', 'syllabus', 'courses', 'academic program', 'what subjects', 'learning', 'education system'],
            'response' => "📚 **Curriculum & Subjects:**\n\n**We follow the Uganda National Curriculum with enhanced programs:**\n\n**NURSERY SECTION:**\n🎨 Pre-literacy and pre-numeracy\n🎵 Music and movement\n🎭 Creative arts and crafts\n🏃 Physical development\n🧠 Cognitive development\n👥 Social skills development\n\n**PRIMARY SECTION (P.1 - P.7):**\n\n**Core Subjects:**\n📖 English Language\n🔢 Mathematics\n🔬 Science (General Science)\n🌍 Social Studies\n🇺🇬 Religious Education\n\n**Additional Subjects:**\n💻 Computer Studies (ICT)\n🎵 Music, Dance & Drama\n🎨 Art & Crafts\n🏃 Physical Education & Sports\n🗣️ Local Languages (Luganda)\n\n**Special Programs:**\n✅ Reading and comprehension\n✅ Creative writing\n✅ Mental mathematics\n✅ Science practicals\n✅ Environmental studies\n✅ Life skills education\n\n**Teaching Methods:**\n✅ Interactive learning\n✅ Hands-on activities\n✅ Group work and discussions\n✅ Educational games\n✅ Technology integration\n✅ Field trips and excursions\n\nWe prepare students for PLE and beyond!"
        ];
        
        // CLASS SIZES & STUDENT-TEACHER RATIO
        $this->knowledge['class_sizes'] = [
            'keywords' => ['class size', 'how many students', 'student teacher ratio', 'class capacity', 'students per class', 'overcrowded', 'small classes'],
            'response' => "👥 **Class Sizes & Student-Teacher Ratio:**\n\n**Our Commitment to Quality:**\n\n📊 **Class Sizes:**\n🎒 **Nursery Classes:** Maximum 20 students\n📚 **Primary Classes:** Maximum 30 students\n🎓 **Average Class Size:** 25 students\n\n👨‍🏫 **Student-Teacher Ratio:**\n✅ **Overall Ratio:** 1:25 (1 teacher per 25 students)\n✅ **Nursery Ratio:** 1:15 (more attention for young learners)\n✅ **Special Subjects:** Even smaller groups\n\n**Benefits of Small Classes:**\n✅ **Individual attention** for each student\n✅ **Better classroom management**\n✅ **More participation** opportunities\n✅ **Personalized learning** approaches\n✅ **Easier identification** of learning difficulties\n✅ **Stronger teacher-student** relationships\n✅ **Better discipline** and behavior management\n\n**Additional Support:**\n👥 **Assistant Teachers** in nursery classes\n👥 **Special Needs Support** when required\n👥 **Remedial Classes** for struggling students\n👥 **Advanced Classes** for gifted students\n\nWe believe every child deserves individual attention!"
        ];
        
        // HOMEWORK & ASSIGNMENTS POLICY
        $this->knowledge['homework'] = [
            'keywords' => ['homework', 'assignments', 'home work', 'take home', 'study at home', 'homework policy', 'how much homework'],
            'response' => "📝 **Homework & Assignments Policy:**\n\n**Our Balanced Approach:**\n\n⏰ **Homework Duration:**\n🎒 **Nursery:** 15-20 minutes (fun activities)\n📚 **P.1-P.3:** 30-45 minutes daily\n📖 **P.4-P.5:** 45-60 minutes daily\n🎓 **P.6-P.7:** 60-90 minutes daily\n\n📋 **Types of Homework:**\n✅ **Reading assignments** - Daily reading practice\n✅ **Mathematics exercises** - Problem-solving skills\n✅ **Writing practice** - Handwriting and composition\n✅ **Research projects** - Independent learning\n✅ **Creative assignments** - Art, music, drama\n✅ **Review work** - Reinforcing class lessons\n\n📅 **Homework Schedule:**\n✅ **Monday-Thursday:** Regular assignments\n✅ **Friday:** Light homework/reading\n✅ **Weekends:** Project work or catch-up\n✅ **Holidays:** Holiday packages available\n\n👨‍👩‍👧‍👦 **Parent Support:**\n✅ **Homework diary** for communication\n✅ **Parent guidance** on how to help\n✅ **Regular feedback** on homework quality\n✅ **Support for struggling students**\n\n🎯 **Our Goals:**\n- Reinforce classroom learning\n- Develop independent study habits\n- Improve time management skills\n- Strengthen parent-child learning time\n\nWe believe homework should enhance, not overwhelm!"
        ];
        
        // DISCIPLINE & BEHAVIOR MANAGEMENT
        $this->knowledge['discipline'] = [
            'keywords' => ['discipline', 'behavior', 'punishment', 'rules', 'conduct', 'behavior management', 'school rules', 'discipline policy'],
            'response' => "⚖️ **Discipline & Behavior Management:**\n\n**Our Positive Approach:**\n\n📋 **School Rules:**\n✅ **Respect** for teachers, staff, and fellow students\n✅ **Punctuality** - Arrive on time\n✅ **Proper uniform** and grooming\n✅ **No bullying** or fighting\n✅ **Care for school property**\n✅ **Complete assignments** on time\n✅ **Follow safety guidelines**\n\n🎯 **Positive Reinforcement:**\n🏆 **Rewards System:**\n- Student of the week/month\n- Academic excellence certificates\n- Good behavior badges\n- Public recognition in assembly\n- Merit points system\n\n📈 **Progressive Discipline:**\n1️⃣ **Verbal warning** and counseling\n2️⃣ **Written warning** to parents\n3️⃣ **Parent-teacher meeting**\n4️⃣ **Temporary suspension** (serious cases)\n5️⃣ **Final warning** before dismissal\n\n❌ **We DO NOT Use:**\n- Corporal punishment\n- Humiliation or embarrassment\n- Excessive punishment\n- Discrimination of any kind\n\n👥 **Support Systems:**\n✅ **Guidance counselor** available\n✅ **Peer mediation** programs\n✅ **Character development** classes\n✅ **Life skills** education\n✅ **Conflict resolution** training\n\n**Our goal is to develop responsible, respectful citizens!**"
        ];
        
        // HEALTH & MEDICAL SERVICES
        $this->knowledge['health_medical'] = [
            'keywords' => ['health', 'medical', 'sick bay', 'nurse', 'first aid', 'medication', 'illness', 'injury', 'health services', 'medical care'],
            'response' => "🏥 **Health & Medical Services:**\n\n**Your Child's Health is Our Priority:**\n\n🩺 **Medical Facilities:**\n✅ **Well-equipped sick bay** with beds\n✅ **Qualified school nurse** on duty\n✅ **First aid stations** throughout campus\n✅ **Emergency medical supplies**\n✅ **Isolation room** for contagious illnesses\n\n👩‍⚕️ **Medical Staff:**\n✅ **Registered nurse** - Full-time\n✅ **First aid trained teachers**\n✅ **Partnership with local clinics**\n✅ **On-call doctor** for emergencies\n\n🚨 **Emergency Procedures:**\n✅ **Immediate first aid** treatment\n✅ **Parent notification** for all incidents\n✅ **Hospital referral** when necessary\n✅ **Ambulance service** available\n✅ **24/7 emergency contacts**\n\n💊 **Medication Management:**\n✅ **Prescription medication** administration\n✅ **Medication storage** (secure)\n✅ **Dosage tracking** and records\n✅ **Parent authorization** required\n\n🔍 **Health Monitoring:**\n✅ **Regular health checks**\n✅ **Growth monitoring** (height/weight)\n✅ **Vision and hearing** screenings\n✅ **Immunization tracking**\n✅ **Health education** programs\n\n📋 **Health Requirements:**\n✅ **Medical examination** before admission\n✅ **Immunization records** required\n✅ **Health insurance** recommended\n✅ **Emergency contact** information\n\n**Common Conditions We Handle:**\n- Minor cuts and bruises\n- Headaches and stomach aches\n- Fever and cold symptoms\n- Allergic reactions\n- Sports injuries\n\nWe maintain detailed health records for every student!"
        ];
        
        // TECHNOLOGY & COMPUTER STUDIES
        $this->knowledge['technology'] = [
            'keywords' => ['computer', 'technology', 'ict', 'computers', 'internet', 'computer lab', 'computer studies', 'digital', 'tech'],
            'response' => "💻 **Technology & Computer Studies:**\n\n**Preparing Students for the Digital Age:**\n\n🖥️ **Computer Lab Facilities:**\n✅ **30+ modern computers** (Windows-based)\n✅ **High-speed internet** connection\n✅ **Interactive whiteboard** for demonstrations\n✅ **Projector and sound system**\n✅ **Air-conditioned environment**\n✅ **Security cameras** and locked access\n\n📚 **Computer Studies Curriculum:**\n\n**Nursery & Lower Primary (Baby-P.3):**\n🎮 **Basic computer awareness**\n🖱️ **Mouse and keyboard skills**\n🎨 **Educational games and activities**\n📱 **Introduction to technology**\n\n**Upper Primary (P.4-P.7):**\n⌨️ **Typing skills** and keyboard mastery\n📝 **Microsoft Word** - Document creation\n📊 **Microsoft Excel** - Basic spreadsheets\n🎨 **Microsoft PowerPoint** - Presentations\n🌐 **Internet basics** and safe browsing\n📧 **Email communication**\n🎨 **Graphics and design** basics\n💾 **File management** and organization\n\n🎯 **Learning Objectives:**\n✅ **Digital literacy** for modern world\n✅ **Problem-solving** through technology\n✅ **Creative expression** using digital tools\n✅ **Research skills** using internet\n✅ **Preparation for secondary school** ICT\n\n⏰ **Lab Schedule:**\n✅ **2 periods per week** per class\n✅ **40 minutes per session**\n✅ **Maximum 15 students** per session\n✅ **Individual computer** access\n\n👨‍💻 **Qualified ICT Teacher:**\n✅ **Computer Science degree**\n✅ **Teaching certification**\n✅ **Industry experience**\n✅ **Continuous training** in new technologies\n\n🔒 **Safety & Security:**\n✅ **Internet filtering** for safe browsing\n✅ **Supervised computer use**\n✅ **Anti-virus protection**\n✅ **Regular system maintenance**\n\nWe're building tomorrow's digital leaders today!"
        ];
        
        // SPORTS & PHYSICAL EDUCATION
        $this->knowledge['sports'] = [
            'keywords' => ['sports', 'games', 'physical education', 'pe', 'football', 'netball', 'athletics', 'swimming', 'exercise', 'fitness'],
            'response' => "⚽ **Sports & Physical Education:**\n\n**Building Strong Bodies and Character:**\n\n🏃 **Sports Facilities:**\n✅ **Football field** (full-size grass pitch)\n✅ **Netball courts** (2 courts)\n✅ **Basketball court**\n✅ **Athletics track** (400m)\n✅ **Swimming pool** (partnership with nearby facility)\n✅ **Indoor sports hall** (multipurpose)\n✅ **Equipment store** (balls, nets, athletics gear)\n\n🏆 **Sports Programs:**\n\n**Major Sports:**\n⚽ **Football** (Boys & Girls teams)\n🏀 **Netball** (Girls teams)\n🏃 **Athletics** (Track & Field events)\n🏊 **Swimming** (Weekly sessions)\n🏀 **Basketball** (Mixed teams)\n🏓 **Table Tennis**\n🏸 **Badminton**\n\n**Age Group Teams:**\n✅ **Under-10 teams** (P.1-P.4)\n✅ **Under-13 teams** (P.5-P.7)\n✅ **School teams** for competitions\n✅ **House teams** for internal competitions\n\n📅 **PE Schedule:**\n✅ **3 periods per week** for all students\n✅ **Morning exercises** (7:30-8:00 AM)\n✅ **Sports afternoon** (Wednesdays)\n✅ **Weekend sports** (Saturdays)\n\n🏆 **Competitions & Achievements:**\n✅ **Inter-school competitions**\n✅ **District championships**\n✅ **Regional tournaments**\n✅ **Annual sports day**\n✅ **House competitions**\n\n**Recent Achievements:**\n🥇 District Football Champions (Under-13)\n🥈 Regional Netball Runners-up\n🥉 Athletics medals in various events\n\n👨‍🏫 **Qualified Sports Staff:**\n✅ **PE teachers** with sports science background\n✅ **Certified coaches** for major sports\n✅ **First aid trained** staff\n✅ **Swimming instructors** (certified)\n\n🎯 **Benefits of Our Sports Program:**\n✅ **Physical fitness** and health\n✅ **Teamwork** and cooperation\n✅ **Leadership** skills development\n✅ **Discipline** and time management\n✅ **Confidence** building\n✅ **Stress relief** and fun\n✅ **Talent identification** and development\n\n**Sports Equipment Provided:**\n- Uniforms for school teams\n- Training equipment\n- Safety gear\n- Competition kits\n\nEvery child participates - we believe in sports for all!"
        ];
        
        // MUSIC & ARTS PROGRAM
        $this->knowledge['music_arts'] = [
            'keywords' => ['music', 'arts', 'drama', 'dance', 'singing', 'instruments', 'creative', 'art class', 'music class', 'cultural'],
            'response' => "🎵 **Music & Arts Program:**\n\n**Nurturing Creative Talents:**\n\n🎨 **Arts Facilities:**\n✅ **Music room** with piano and instruments\n✅ **Art studio** with supplies and equipment\n✅ **Drama hall** for performances\n✅ **Dance studio** with mirrors and sound system\n✅ **Exhibition space** for student artwork\n\n🎼 **Music Program:**\n\n**Instruments Taught:**\n🎹 **Piano/Keyboard** - Individual and group lessons\n🥁 **Drums** - Traditional and modern\n🎸 **Guitar** - Acoustic guitar basics\n🎺 **Recorder** - Wind instrument introduction\n🎤 **Vocals** - Singing and choir\n\n**Music Activities:**\n✅ **School choir** (50+ members)\n✅ **Traditional dance** groups\n✅ **Modern dance** classes\n✅ **Music theory** lessons\n✅ **Composition** and songwriting\n✅ **Performance** opportunities\n\n🎭 **Drama & Theatre:**\n✅ **Drama classes** for all students\n✅ **School plays** and productions\n✅ **Poetry recitation**\n✅ **Storytelling** sessions\n✅ **Public speaking** training\n✅ **Annual drama festival**\n\n🎨 **Visual Arts:**\n✅ **Drawing** and sketching\n✅ **Painting** (watercolor, acrylic)\n✅ **Crafts** and handwork\n✅ **Sculpture** (clay work)\n✅ **Textile arts**\n✅ **Digital art** (computer graphics)\n\n🏆 **Competitions & Festivals:**\n✅ **National Music Festival** participation\n✅ **Inter-school competitions**\n✅ **Cultural celebrations**\n✅ **Talent shows**\n✅ **Art exhibitions**\n\n**Recent Achievements:**\n🥇 **1st Place** - Traditional Dance (Regional)\n🥈 **2nd Place** - Choir Competition\n🎨 **Best Art Display** - District Exhibition\n\n👩‍🎨 **Qualified Arts Teachers:**\n✅ **Music teacher** (Bachelor of Music)\n✅ **Art teacher** (Fine Arts degree)\n✅ **Drama instructor** (Theatre Arts)\n✅ **Dance choreographer**\n\n📅 **Arts Schedule:**\n✅ **2 periods per week** - Music\n✅ **2 periods per week** - Art\n✅ **1 period per week** - Drama\n✅ **After-school clubs** available\n✅ **Weekend workshops**\n\n🎯 **Benefits:**\n✅ **Creative expression**\n✅ **Cultural appreciation**\n✅ **Confidence building**\n✅ **Emotional development**\n✅ **Fine motor skills**\n✅ **Cognitive development**\n✅ **Social skills**\n\n**Performance Opportunities:**\n- School assemblies\n- Parent events\n- Community festivals\n- Graduation ceremonies\n- Cultural celebrations\n\nWe believe every child is an artist!"
        ];
        
        // BOARDING LIFE DETAILED
        $this->knowledge['boarding_life'] = [
            'keywords' => ['boarding life', 'dormitory', 'boarding house', 'boarding students', 'boarding facilities', 'boarding experience', 'hostel', 'residential'],
            'response' => "🏠 **Boarding Life at St. Lawrence:**\n\n**A Home Away From Home:**\n\n🏢 **Boarding Facilities:**\n✅ **Separate houses** for boys and girls\n✅ **Modern dormitories** (4-6 beds per room)\n✅ **Individual lockers** for personal items\n✅ **Study rooms** for homework and reading\n✅ **Recreation halls** with TV and games\n✅ **Dining hall** with nutritious meals\n✅ **Laundry facilities** and services\n✅ **Sick bay** for medical needs\n\n⏰ **Daily Boarding Schedule:**\n\n**Weekdays:**\n🌅 **6:00 AM** - Wake up and personal hygiene\n🍳 **6:30 AM** - Breakfast\n📚 **7:30 AM** - Morning prep/study time\n🏫 **8:00 AM** - Classes begin\n🍽️ **1:00 PM** - Lunch break\n📖 **2:00 PM** - Afternoon classes\n🏃 **4:00 PM** - Sports and activities\n🍽️ **6:00 PM** - Dinner\n📚 **7:00 PM** - Evening prep/homework\n📺 **8:30 PM** - Recreation time\n🛏️ **9:00 PM** - Bedtime (varies by age)\n\n**Weekends:**\n🛏️ **7:00 AM** - Wake up\n🍳 **7:30 AM** - Breakfast\n🧹 **8:00 AM** - Dormitory cleaning\n🏃 **9:00 AM** - Sports and games\n📚 **11:00 AM** - Study time\n🍽️ **1:00 PM** - Lunch\n🎬 **2:00 PM** - Movies/entertainment\n🎨 **4:00 PM** - Arts and crafts\n🍽️ **6:00 PM** - Dinner\n📞 **7:00 PM** - Parent phone calls\n🛏️ **9:00 PM** - Bedtime\n\n👥 **Boarding Staff:**\n✅ **Boarding Master** (Boys house)\n✅ **Boarding Mistress** (Girls house)\n✅ **Matrons** for daily care\n✅ **Night watchmen** for security\n✅ **Nurse** for medical needs\n✅ **Counselor** for emotional support\n\n🍽️ **Meals & Nutrition:**\n✅ **5 meals daily** (breakfast, snack, lunch, snack, dinner)\n✅ **Balanced diet** planned by nutritionist\n✅ **Fresh fruits** and vegetables daily\n✅ **Special diets** accommodated\n✅ **Clean drinking water** always available\n\n🧺 **Laundry & Personal Care:**\n✅ **Laundry service** twice weekly\n✅ **Personal hygiene** supervision\n✅ **Uniform maintenance**\n✅ **Pocket money** management\n✅ **Shopping trips** for essentials\n\n📞 **Parent Communication:**\n✅ **Weekly phone calls** scheduled\n✅ **Monthly reports** sent home\n✅ **Visiting days** every month\n✅ **Emergency contact** 24/7\n✅ **WhatsApp updates** with photos\n\n🎯 **Benefits of Boarding:**\n✅ **Independence** and self-reliance\n✅ **Time management** skills\n✅ **Social skills** and friendships\n✅ **Academic focus** with study time\n✅ **Character development**\n✅ **Cultural exchange** with diverse students\n✅ **24/7 supervision** and safety\n\n🔒 **Safety & Security:**\n✅ **24/7 security guards**\n✅ **CCTV monitoring**\n✅ **Controlled access**\n✅ **Fire safety equipment**\n✅ **Emergency procedures**\n✅ **Medical staff on duty**\n\nOur boarding students become confident, independent leaders!"
        ];
        
        // PARENT-TEACHER COMMUNICATION
        $this->knowledge['parent_communication'] = [
            'keywords' => ['parent teacher', 'communication', 'meetings', 'reports', 'updates', 'progress', 'parent involvement', 'pta'],
            'response' => "👨‍👩‍👧‍👦 **Parent-Teacher Communication:**\n\n**Strong Partnership for Student Success:**\n\n📅 **Regular Communication Schedule:**\n\n**Formal Meetings:**\n✅ **Parent-Teacher Conferences** - Every term (3 times/year)\n✅ **PTA Meetings** - Monthly (1st Saturday)\n✅ **Academic Review Meetings** - Mid-term\n✅ **Graduation Meetings** - End of year\n✅ **Orientation Meetings** - Beginning of year\n\n📊 **Progress Reports:**\n✅ **Weekly progress updates** (WhatsApp/SMS)\n✅ **Monthly detailed reports** (academic & behavior)\n✅ **Mid-term assessment reports**\n✅ **End-of-term report cards**\n✅ **Annual comprehensive reports**\n\n📱 **Communication Channels:**\n\n**Immediate Communication:**\n📞 **Phone calls** - Urgent matters\n📱 **WhatsApp** - Quick updates and photos\n📧 **Email** - Formal communication\n📝 **Student diary** - Daily communication book\n\n**Group Communication:**\n👥 **Class WhatsApp groups** - General updates\n📢 **School newsletter** - Monthly publication\n📋 **Notice board** - Important announcements\n🌐 **School website** - Policies and information\n\n🎯 **What We Communicate:**\n\n**Academic Progress:**\n✅ **Test scores** and grades\n✅ **Homework completion**\n✅ **Class participation**\n✅ **Areas of improvement**\n✅ **Achievements** and awards\n\n**Behavior & Social:**\n✅ **Behavior reports**\n✅ **Social interactions**\n✅ **Leadership activities**\n✅ **Disciplinary issues**\n✅ **Character development**\n\n**Health & Welfare:**\n✅ **Health incidents**\n✅ **Medication administration**\n✅ **Emotional wellbeing**\n✅ **Attendance records**\n\n**School Events:**\n✅ **Upcoming events**\n✅ **Sports competitions**\n✅ **Cultural activities**\n✅ **Field trips**\n✅ **Holiday schedules**\n\n👥 **Parent-Teacher Association (PTA):**\n✅ **Active parent participation**\n✅ **School development projects**\n✅ **Fundraising activities**\n✅ **Policy discussions**\n✅ **Event organization**\n\n📞 **How to Reach Teachers:**\n\n**Best Times to Call:**\n⏰ **Morning:** 7:30-8:00 AM\n⏰ **Break Time:** 10:30-11:00 AM\n⏰ **Lunch:** 1:00-2:00 PM\n⏰ **After School:** 4:00-5:00 PM\n\n**Appointment Booking:**\n✅ **Call school office:** +256 701 420 506\n✅ **Send WhatsApp message**\n✅ **Email the teacher directly**\n✅ **Use student diary**\n\n🎯 **Our Commitment:**\n✅ **24-hour response** to urgent matters\n✅ **48-hour response** to general inquiries\n✅ **Open door policy** for parent concerns\n✅ **Regular feedback** on student progress\n✅ **Collaborative approach** to problem-solving\n\n**Special Conferences:**\n- Individual student progress meetings\n- Behavioral intervention planning\n- Academic support planning\n- Career guidance discussions\n- Special needs consultations\n\nWe believe parents are our partners in education!"
        ];
        
        // SCHOOL CALENDAR & EVENTS
        $this->knowledge['school_calendar'] = [
            'keywords' => ['calendar', 'events', 'activities', 'schedule', 'when', 'dates', 'school events', 'annual events', 'celebrations'],
            'response' => "📅 **School Calendar & Annual Events:**\n\n**Academic Year Structure:**\n\n**TERM 1 (February - April):**\n📚 **Academic Focus:** New year orientation, baseline assessments\n🎉 **Events:** \n- Orientation week (new students)\n- Inter-house sports competitions\n- Science fair\n- Parent-teacher conferences\n- Easter celebrations\n\n**TERM 2 (May - August):**\n📚 **Academic Focus:** Mid-year assessments, project work\n🎉 **Events:**\n- Sports day (May)\n- Music and dance festival\n- Career guidance week\n- Mid-year examinations\n- Cultural week\n- Parent open day\n\n**TERM 3 (September - November):**\n📚 **Academic Focus:** Final preparations, PLE (P.7)\n🎉 **Events:**\n- Founders' day celebration\n- Graduation ceremony\n- Awards day\n- Final examinations\n- Christmas celebrations\n- End-of-year party\n\n🎊 **Special Annual Events:**\n\n**🏆 Sports Day (May):**\n- Track and field competitions\n- Team sports finals\n- Parent participation events\n- Awards ceremony\n- Refreshments and entertainment\n\n**🎵 Music & Dance Festival (June):**\n- Choir competitions\n- Traditional dance performances\n- Drama presentations\n- Talent show\n- Cultural exhibitions\n\n**🔬 Science Fair (March):**\n- Student science projects\n- Experiments and demonstrations\n- Innovation competitions\n- STEM workshops\n- Guest scientist presentations\n\n**🎓 Graduation Ceremony (November):**\n- P.7 graduation (main event)\n- Academic awards\n- Special recognitions\n- Guest speaker\n- Certificate presentation\n\n**📚 Academic Competitions:**\n- Mathematics olympiad\n- English spelling bee\n- Science quiz competitions\n- Debate tournaments\n- Reading competitions\n\n**🎨 Cultural Celebrations:**\n- Independence Day (October 9)\n- Martyrs Day (June 3)\n- Christmas celebrations\n- Easter festivities\n- Cultural diversity week\n\n**👨‍👩‍👧‍👦 Parent Involvement Events:**\n- Monthly PTA meetings\n- Parent-teacher conferences (3 times/year)\n- Open house events\n- Volunteer appreciation day\n- Family fun day\n\n**📞 Event Information:**\nFor specific dates and details about upcoming events:\n- Call: +256 701 420 506\n- Check school notice board\n- Join parent WhatsApp groups\n- Visit during office hours\n\nAll parents are warmly invited to participate!"
        ];
        
        // SCHOOL POLICIES & PROCEDURES
        $this->knowledge['policies'] = [
            'keywords' => ['policy', 'policies', 'rules', 'procedures', 'guidelines', 'regulations', 'code of conduct'],
            'response' => "📋 **School Policies & Procedures:**\n\n**Key School Policies:**\n\n**📚 Academic Policy:**\n✅ **Attendance:** Minimum 85% required\n✅ **Homework:** Must be completed and submitted on time\n✅ **Assessments:** Regular tests and continuous assessment\n✅ **Promotion:** Based on academic performance and behavior\n✅ **Extra classes:** Available for struggling students\n\n**👔 Uniform Policy:**\n✅ **Daily uniform:** Must be clean and properly worn\n✅ **Sports uniform:** Required for PE and sports activities\n✅ **Hair:** Neat and tidy (boys: short, girls: tied)\n✅ **Shoes:** Black leather shoes, white socks\n✅ **Jewelry:** Minimal - small earrings for girls only\n\n**⏰ Attendance Policy:**\n✅ **School hours:** 7:30 AM - 4:00 PM (Monday-Friday)\n✅ **Punctuality:** Students must arrive by 7:45 AM\n✅ **Absences:** Parent notification required\n✅ **Medical leave:** Doctor's note required for 3+ days\n✅ **Late arrival:** Requires explanation letter\n\n**🏥 Health & Safety Policy:**\n✅ **Medical records:** Required for all students\n✅ **Medication:** Only administered with parent consent\n✅ **Emergencies:** Parents contacted immediately\n✅ **Sick students:** Isolated and parents called\n✅ **Accidents:** First aid provided, parents notified\n\n**📱 Technology Policy:**\n✅ **Mobile phones:** Not allowed for primary students\n✅ **Computer use:** Supervised and educational only\n✅ **Internet:** Filtered and monitored\n✅ **Social media:** Not permitted during school hours\n✅ **Devices:** School not responsible for personal items\n\n**🚌 Transport Policy:**\n✅ **Bus behavior:** Students must follow bus rules\n✅ **Safety:** Seat belts must be worn\n✅ **Pickup/Drop-off:** Designated times and locations\n✅ **Changes:** 24-hour notice required\n✅ **Payment:** Transport fees paid termly\n\n**💰 Fee Policy:**\n✅ **Payment:** Fees due at beginning of each term\n✅ **Late payment:** 10% penalty after 2 weeks\n✅ **Refunds:** No refunds for withdrawn students\n✅ **Discounts:** Available for siblings (5% off)\n✅ **Payment methods:** Cash, bank transfer, mobile money\n\n**⚖️ Discipline Policy:**\n✅ **Positive reinforcement:** Rewards for good behavior\n✅ **Progressive discipline:** Warnings before serious action\n✅ **No corporal punishment:** We use positive methods\n✅ **Parent involvement:** Parents contacted for serious issues\n✅ **Suspension:** Only for serious misconduct\n\n**🎒 Homework Policy:**\n✅ **Daily homework:** Age-appropriate amounts\n✅ **Weekend work:** Light assignments only\n✅ **Holiday packages:** Optional but recommended\n✅ **Parent support:** Guidance provided\n✅ **Late submission:** Affects grades\n\n**🍽️ Food Policy:**\n✅ **School meals:** Nutritious and balanced\n✅ **Outside food:** Limited to healthy snacks\n✅ **Allergies:** Special diets accommodated\n✅ **Water:** Clean drinking water always available\n✅ **Lunch money:** Secure handling procedures\n\n**📞 Communication Policy:**\n✅ **Parent contact:** Regular updates provided\n✅ **Emergency contact:** Must be current\n✅ **Complaints:** Formal procedure available\n✅ **Confidentiality:** Student information protected\n✅ **Meetings:** Appointments preferred\n\n**🔒 Child Protection Policy:**\n✅ **Safety first:** All staff trained in child protection\n✅ **Background checks:** All staff vetted\n✅ **Reporting:** Clear procedures for concerns\n✅ **Confidentiality:** Sensitive handling of issues\n✅ **Support:** Counseling available when needed\n\nFor complete policy documents, visit the school office!"
        ];
        
        // FREQUENTLY ASKED QUESTIONS
        $this->knowledge['faq'] = [
            'keywords' => ['faq', 'frequently asked', 'common questions', 'questions', 'ask', 'wonder'],
            'response' => "❓ **Frequently Asked Questions:**\n\n**📚 ACADEMIC QUESTIONS:**\n\n**Q: What curriculum do you follow?**\nA: We follow the Uganda National Curriculum with enhanced programs in ICT, arts, and sports.\n\n**Q: What is your student-teacher ratio?**\nA: Our ratio is 1:25 (1 teacher per 25 students) ensuring individual attention.\n\n**Q: Do you offer extra classes?**\nA: Yes! We provide remedial classes for struggling students and advanced classes for gifted learners.\n\n**Q: How do you prepare students for PLE?**\nA: We have specialized P.7 preparation with mock exams, extra coaching, and proven teaching methods.\n\n**💰 FEES & PAYMENTS:**\n\n**Q: When are fees due?**\nA: Fees are due at the beginning of each term. Late payment attracts a 10% penalty after 2 weeks.\n\n**Q: Do you offer payment plans?**\nA: Yes, we can arrange payment plans for families who need them. Contact our bursar.\n\n**Q: Are there any hidden costs?**\nA: No hidden costs! Our fees include tuition, meals, and learning materials. Only uniforms and transport are extra.\n\n**Q: Do you give sibling discounts?**\nA: Yes! We offer 5% discount for the second child and subsequent children.\n\n**🏠 BOARDING QUESTIONS:**\n\n**Q: What age can children start boarding?**\nA: We accept boarders from Nursery level (age 4+), but recommend P.1 and above for better adjustment.\n\n**Q: How often can parents visit?**\nA: Parents can visit every weekend. We also have designated visiting days monthly.\n\n**Q: What about laundry and personal care?**\nA: We provide laundry service twice weekly and supervise personal hygiene for all boarders.\n\n**Q: Is there 24/7 supervision?**\nA: Yes! We have qualified matrons, security guards, and a nurse on duty 24/7.\n\n**🚌 TRANSPORT QUESTIONS:**\n\n**Q: Do you provide school transport?**\nA: Yes! We have school buses covering major areas of Kampala with experienced drivers.\n\n**Q: How much does transport cost?**\nA: Transport fees vary by distance. Contact us for specific route pricing.\n\n**Q: What safety measures do you have?**\nA: All buses have seat belts, first aid kits, and are driven by licensed, experienced drivers.\n\n**🏥 HEALTH & SAFETY:**\n\n**Q: Do you have medical facilities?**\nA: Yes! We have a well-equipped sick bay with a qualified nurse and partnerships with local clinics.\n\n**Q: What if my child gets sick?**\nA: We provide immediate first aid, contact parents, and arrange hospital referral if needed.\n\n**Q: Do you handle special medical needs?**\nA: Yes! We can manage chronic conditions like asthma, diabetes, etc. with proper medical documentation.\n\n**📱 COMMUNICATION:**\n\n**Q: How do you communicate with parents?**\nA: We use phone calls, WhatsApp, emails, student diaries, and regular meetings.\n\n**Q: How often do you send reports?**\nA: Weekly updates via WhatsApp, monthly detailed reports, and termly report cards.\n\n**🎯 ADMISSION QUESTIONS:**\n\n**Q: When can I apply for admission?**\nA: Admissions are open year-round! However, it's best to apply early for the next academic year.\n\n**Q: What documents do I need?**\nA: Birth certificate, passport photos, previous school report (if any), and immunization records.\n\n**Q: Do you have entrance exams?**\nA: We conduct simple assessments to place students in appropriate classes, not to exclude them.\n\n**Q: Can I transfer my child mid-term?**\nA: Yes! We accept transfers at any time during the academic year.\n\n**Still have questions? Call us at +256 701 420 506!**"
        ];
        
        // EMERGENCY PROCEDURES
        $this->knowledge['emergency'] = [
            'keywords' => ['emergency', 'urgent', 'accident', 'fire', 'evacuation', 'crisis', 'safety procedures'],
            'response' => "🚨 **Emergency Procedures & Safety:**\n\n**Our Commitment to Safety:**\n\n**🔥 Fire Safety:**\n✅ **Fire extinguishers** in every building\n✅ **Smoke detectors** throughout campus\n✅ **Emergency exits** clearly marked\n✅ **Monthly fire drills** conducted\n✅ **Evacuation procedures** practiced regularly\n✅ **Assembly points** designated and known\n\n**🏥 Medical Emergencies:**\n✅ **Qualified nurse** on duty during school hours\n✅ **First aid kits** in every classroom\n✅ **Emergency medical supplies** stocked\n✅ **Ambulance service** on speed dial\n✅ **Hospital partnerships** established\n✅ **Parent notification** immediate\n\n**📞 Emergency Contacts:**\n\n**School Emergency Line:**\n🚨 **+256 701 420 506** (24/7 for boarding parents)\n🚨 **+256 772 420 506** (Alternative line)\n\n**External Emergency Services:**\n🚑 **Ambulance:** 911 or 0800-911-911\n🚒 **Fire Brigade:** 999\n👮 **Police:** 999 or 0800-199-699\n\n**🏃 Evacuation Procedures:**\n\n**In Case of Fire:**\n1. **Sound alarm** immediately\n2. **Evacuate calmly** via nearest exit\n3. **Assemble at designated points**\n4. **Teachers take attendance**\n5. **Contact emergency services**\n6. **Notify parents**\n\n**In Case of Medical Emergency:**\n1. **Secure the scene** and ensure safety\n2. **Provide first aid** if trained\n3. **Call school nurse** immediately\n4. **Contact parents** and emergency services\n5. **Accompany student** to hospital if needed\n6. **Document incident** thoroughly\n\n**🔒 Security Measures:**\n✅ **24/7 security guards** on duty\n✅ **CCTV surveillance** throughout campus\n✅ **Controlled access** gates\n✅ **Visitor registration** system\n✅ **ID badges** for all staff\n✅ **Emergency communication** system\n\n**⛈️ Weather Emergencies:**\n✅ **Lightning protection** systems\n✅ **Covered walkways** between buildings\n✅ **Weather monitoring** and alerts\n✅ **Indoor alternatives** for outdoor activities\n✅ **Early dismissal** procedures if needed\n\n**👨‍👩‍👧‍👦 Parent Emergency Information:**\n\n**What Parents Should Do:**\n✅ **Keep contact information** updated\n✅ **Provide emergency contacts** (3 people minimum)\n✅ **Inform school** of medical conditions\n✅ **Stay calm** and follow school instructions\n✅ **Come to school** only if requested\n\n**Emergency Communication:**\n✅ **SMS alerts** sent to all parents\n✅ **WhatsApp updates** in parent groups\n✅ **Phone calls** for serious incidents\n✅ **Email notifications** with details\n✅ **School website** updates\n\n**🎒 Student Emergency Preparedness:**\n✅ **Emergency drills** conducted monthly\n✅ **Safety education** in curriculum\n✅ **Emergency procedures** posted in classrooms\n✅ **Student safety monitors** trained\n✅ **Emergency supplies** in each classroom\n\n**📋 Emergency Supplies:**\n✅ **First aid kits** (fully stocked)\n✅ **Emergency food and water**\n✅ **Flashlights and batteries**\n✅ **Emergency radios**\n✅ **Blankets and basic supplies**\n✅ **Student emergency cards**\n\n**🏥 Medical Emergency Response:**\n\n**For Serious Injuries:**\n1. **Don't move** the injured person\n2. **Call ambulance** immediately\n3. **Provide first aid** within training\n4. **Contact parents** and school administration\n5. **Accompany to hospital** with school staff\n6. **Follow up** with family\n\n**For Minor Injuries:**\n1. **Assess the injury** carefully\n2. **Provide appropriate first aid**\n3. **Document in incident book**\n4. **Inform parents** via phone/message\n5. **Monitor student** throughout day\n6. **Send report** home\n\n**We prioritize safety above all else!**\n\nFor emergency preparedness training or questions, contact us at +256 701 420 506."
        ];
    }
    
    public function findAnswer($question) {
        $question = strtolower(trim($question));
        
        // Score-based matching for better results
        $matches = [];
        
        // Check each knowledge entry
        foreach ($this->knowledge as $key => $data) {
            $score = 0;
            foreach ($data['keywords'] as $keyword) {
                $keyword = strtolower($keyword);
                // Exact match gets highest score
                if ($question === $keyword) {
                    $score += 100;
                }
                // Contains keyword gets good score
                if (strpos($question, $keyword) !== false) {
                    $score += 50;
                }
                // Keyword contains part of question
                if (strpos($keyword, $question) !== false && strlen($question) > 3) {
                    $score += 30;
                }
                // Word-by-word matching
                $questionWords = explode(' ', $question);
                $keywordWords = explode(' ', $keyword);
                foreach ($questionWords as $qWord) {
                    if (strlen($qWord) > 3) { // Skip short words
                        foreach ($keywordWords as $kWord) {
                            if (strtolower($qWord) === strtolower($kWord)) {
                                $score += 20;
                            }
                        }
                    }
                }
            }
            
            if ($score > 0) {
                $matches[$key] = [
                    'score' => $score,
                    'response' => $data['response'],
                    'category' => $key
                ];
            }
        }
        
        // Sort by score (highest first)
        uasort($matches, function($a, $b) {
            return $b['score'] - $a['score'];
        });
        
        // Return best match if score is good enough
        if (!empty($matches)) {
            $bestMatch = reset($matches);
            if ($bestMatch['score'] >= 20) { // Minimum threshold
                return [
                    'found' => true,
                    'response' => $bestMatch['response'],
                    'category' => $bestMatch['category']
                ];
            }
        }
        
        // Default response if no match found
        return [
            'found' => false,
            'response' => "I'm not sure about that specific question. However, I can help you with:\n\n• School fees and payments\n• Admission process\n• Contact information\n• School programs and facilities\n• Extracurricular activities\n• And much more!\n\nPlease try asking in a different way, or contact us directly at +256 701 420 506.",
            'category' => 'unknown'
        ];
    }
    
    public function getQuickActions() {
        return [
            "What are your school hours?",
            "How do I apply for admission?",
            "What extracurricular activities do you offer?",
            "What is the school's contact information?",
            "What are the school fees?",
            "Do you offer boarding?"
        ];
    }
}
