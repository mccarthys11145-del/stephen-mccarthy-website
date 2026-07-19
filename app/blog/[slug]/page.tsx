
import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Calendar, Clock, ArrowLeft, User } from 'lucide-react'

const blogPosts = {
  'mental-health-overall-wellness': {
    title: "The Importance of Mental Health in Overall Wellness",
    excerpt: "Understanding the critical connection between mental health and physical well-being, and why comprehensive care matters more than ever.",
    content: `
      <p>Mental health is not separate from physical health—they are interconnected aspects of our overall well-being that influence each other in profound ways. As a physician assistant specializing in psychiatry, I've witnessed firsthand how addressing mental health concerns can dramatically improve patients' physical symptoms and quality of life.</p>
      
      <h2>The Mind-Body Connection</h2>
      <p>Research consistently shows that mental health conditions like depression and anxiety can manifest as physical symptoms. Patients may experience headaches, digestive issues, chronic pain, or sleep disturbances that have psychological roots. Conversely, chronic physical conditions can significantly impact mental health, creating a cycle that requires comprehensive treatment.</p>
      
      <h2>Integrated Care Approach</h2>
      <p>At Lehigh Valley Wellness, we take a holistic approach to healthcare that recognizes this connection. Our comprehensive services include not only psychiatric care but also wellness services like hormone therapy and weight management, understanding that optimal health requires attention to both physical and mental well-being.</p>
      
      <h2>Breaking Down Barriers</h2>
      <p>One of the biggest challenges in healthcare today is the artificial separation between mental and physical health treatment. Many patients hesitate to seek mental health care due to stigma, but when we frame it as an essential component of overall wellness, acceptance and engagement improve significantly.</p>
      
      <h2>The Path Forward</h2>
      <p>The future of healthcare lies in integrated, patient-centered care that addresses the whole person. This means considering psychological factors in physical ailments and recognizing the physical impacts of mental health conditions. Through this comprehensive approach, we can achieve better outcomes for our patients and communities.</p>
    `,
    category: "Mental Health",
    date: "2024-01-15",
    readTime: "5 min read"
  },
  'breaking-barriers-psychiatric-care': {
    title: "Breaking Down Barriers to Psychiatric Care",
    excerpt: "Addressing stigma and accessibility challenges in mental healthcare, and how we can create more inclusive treatment environments.",
    content: `
      <p>Despite significant advances in mental healthcare, many individuals still face substantial barriers when seeking psychiatric treatment. These barriers—ranging from stigma to accessibility issues—prevent countless people from receiving the care they need and deserve.</p>
      
      <h2>Understanding the Barriers</h2>
      <p>The obstacles to mental healthcare are multifaceted. Social stigma remains a significant deterrent, with many people fearing judgment from family, friends, or employers. Geographic barriers, especially in rural areas, limit access to specialized care. Financial constraints and insurance limitations create additional hurdles.</p>
      
      <h2>Cultural and Language Considerations</h2>
      <p>Cultural factors play a crucial role in mental health treatment acceptance. At our practice, we provide bilingual services in English and Spanish, recognizing that effective treatment requires cultural competency and clear communication in the patient's preferred language.</p>
      
      <h2>Technology as a Solution</h2>
      <p>Telehealth services have revolutionized mental healthcare accessibility. By offering secure, convenient virtual consultations, we can reach patients who might otherwise be unable to access care due to transportation, mobility, or scheduling constraints.</p>
      
      <h2>Building Trust and Reducing Stigma</h2>
      <p>Creating a welcoming, non-judgmental environment is essential. This means training staff in cultural sensitivity, maintaining patient confidentiality, and educating communities about the medical nature of mental health conditions.</p>
      
      <h2>The Role of Community Education</h2>
      <p>Reducing barriers requires community-wide effort. By participating in educational initiatives and promoting mental health awareness, healthcare providers can help normalize seeking psychiatric care and reduce the stigma that prevents many from getting help.</p>
    `,
    category: "Healthcare Access",
    date: "2024-01-08",
    readTime: "7 min read"
  },
  'telehealth-mental-health-services': {
    title: "Telehealth Revolution in Mental Health Services",
    excerpt: "How digital healthcare delivery is transforming access to psychiatric services and improving patient outcomes.",
    content: `
      <p>The COVID-19 pandemic accelerated the adoption of telehealth services across all medical specialties, but perhaps nowhere has the impact been more transformative than in mental healthcare. Telehealth has not only maintained continuity of care during challenging times but has also opened new possibilities for accessibility and patient engagement.</p>
      
      <h2>Advantages of Telehealth in Mental Health</h2>
      <p>Telehealth offers several unique advantages for psychiatric care. Patients can receive treatment from the comfort and privacy of their own homes, reducing anxiety and stigma. Geographic barriers disappear, allowing access to specialized care regardless of location. Scheduling becomes more flexible, with evening appointments more easily accommodated.</p>
      
      <h2>Overcoming Traditional Barriers</h2>
      <p>Many patients who previously avoided seeking mental health care due to stigma, transportation issues, or scheduling conflicts now find telehealth an acceptable alternative. The privacy of home-based sessions can make patients more comfortable discussing sensitive topics.</p>
      
      <h2>Maintaining Quality of Care</h2>
      <p>Concerns about the quality of virtual mental healthcare have proven largely unfounded. Many therapeutic interventions, medication management consultations, and follow-up appointments are highly effective via telehealth platforms. The key is using secure, HIPAA-compliant technology and maintaining the same professional standards as in-person care.</p>
      
      <h2>Hybrid Care Models</h2>
      <p>The future of mental healthcare likely lies in hybrid models that combine the convenience of telehealth with the benefits of in-person care when needed. This approach maximizes accessibility while ensuring comprehensive treatment options.</p>
      
      <h2>Technology and Human Connection</h2>
      <p>While technology enables access, the human connection remains at the heart of effective mental healthcare. Telehealth is a tool that enhances our ability to provide compassionate, personalized care to more people in need.</p>
    `,
    category: "Healthcare Technology",
    date: "2024-01-02",
    readTime: "6 min read"
  },
  'supporting-families-addiction-recovery': {
    title: "Supporting Families Through Addiction Recovery",
    excerpt: "The role of family support systems in addiction treatment and how healthcare providers can facilitate healing relationships.",
    content: `
      <p>Addiction is often called a family disease because its impact extends far beyond the individual struggling with substance use. Families play a crucial role in recovery, but they also need support, education, and healing themselves.</p>
      
      <h2>Understanding Family Impact</h2>
      <p>Addiction affects family dynamics in complex ways. Family members may experience their own trauma, develop codependent behaviors, or struggle with trust issues. Understanding these dynamics is essential for effective treatment that addresses the whole family system.</p>
      
      <h2>The Role of Family in Recovery</h2>
      <p>Research consistently shows that strong family support significantly improves recovery outcomes. However, this support must be informed and healthy. Family members need education about addiction as a medical condition, not a moral failing.</p>
      
      <h2>Dual Diagnosis Considerations</h2>
      <p>Many individuals with substance use disorders also have co-occurring mental health conditions. Family members need to understand how conditions like depression, anxiety, or PTSD may complicate addiction and recovery, requiring specialized dual diagnosis treatment.</p>
      
      <h2>Communication and Boundaries</h2>
      <p>Healthy communication and appropriate boundaries are essential for both the person in recovery and their family members. This often requires professional guidance to navigate the complex emotions and relationship dynamics involved.</p>
      
      <h2>Long-term Recovery Support</h2>
      <p>Recovery is a lifelong process, and families need to understand their ongoing role in supporting their loved one while maintaining their own well-being. This includes recognizing warning signs of relapse and knowing when to seek professional help.</p>
      
      <h2>Professional Guidance</h2>
      <p>Healthcare providers specializing in addiction medicine can offer family therapy, education programs, and resources that help families become positive forces in the recovery process while protecting their own mental health.</p>
    `,
    category: "Addiction Medicine",
    date: "2023-12-25",
    readTime: "8 min read"
  },
  'child-adolescent-mental-health': {
    title: "Child and Adolescent Mental Health: Early Intervention Matters",
    excerpt: "Recognizing signs of mental health challenges in young people and the importance of timely, age-appropriate treatment.",
    content: `
      <p>Mental health challenges often begin in childhood or adolescence, making early identification and intervention crucial for long-term outcomes. As a provider specializing in child and adolescent psychiatry, I've seen how timely, appropriate treatment can change the trajectory of a young person's life.</p>
      
      <h2>Recognizing Early Warning Signs</h2>
      <p>Mental health symptoms in children and adolescents may present differently than in adults. Changes in academic performance, social withdrawal, sleep disturbances, or behavioral changes can all signal emerging mental health concerns that deserve professional attention.</p>
      
      <h2>Developmental Considerations</h2>
      <p>Treatment for young people must account for their developmental stage. What works for an adult may not be appropriate for a child or teenager. Age-appropriate interventions, family involvement, and school collaboration are essential components of effective pediatric mental healthcare.</p>
      
      <h2>The Importance of Family Involvement</h2>
      <p>Successful treatment of children and adolescents almost always requires active family participation. Parents and caregivers need education about mental health conditions, tools for supporting their child, and sometimes their own therapeutic support.</p>
      
      <h2>School and Community Collaboration</h2>
      <p>Young people spend significant time in school and community settings. Collaboration with teachers, school counselors, and other community professionals ensures consistent support across all environments where the child or adolescent spends time.</p>
      
      <h2>Building Resilience</h2>
      <p>Early intervention isn't just about treating problems—it's about building resilience and coping skills that will serve young people throughout their lives. Teaching emotional regulation, stress management, and help-seeking behaviors provides tools for lifelong mental wellness.</p>
      
      <h2>Hope and Recovery</h2>
      <p>With appropriate treatment and support, children and adolescents with mental health challenges can thrive. Early intervention provides the best opportunity for positive outcomes and helps young people develop into healthy, resilient adults.</p>
    `,
    category: "Pediatric Care",
    date: "2023-12-18",
    readTime: "6 min read"
  },
  'evolution-psychiatric-practice': {
    title: "The Evolution of Psychiatric Practice: A PA's Perspective",
    excerpt: "Reflecting on changes in psychiatric care delivery and the expanding role of physician assistants in mental health.",
    content: `
      <p>The field of psychiatry has undergone remarkable transformation over the past decade, and physician assistants have played an increasingly important role in delivering mental healthcare. As both a practitioner and observer of these changes, I've witnessed firsthand how our profession has evolved to meet growing mental health needs.</p>
      
      <h2>The Growing Role of PAs in Psychiatry</h2>
      <p>Physician assistants now provide comprehensive mental health services across various settings, from private practices to community health centers. Our training in medical model approaches, combined with collaborative practice experience, positions us well to address the multifaceted nature of mental health conditions.</p>
      
      <h2>Addressing the Mental Health Workforce Shortage</h2>
      <p>The shortage of mental health providers has created opportunities for PAs to fill critical gaps in care. By working in underserved areas and providing specialized services, we help ensure that more people have access to quality mental healthcare.</p>
      
      <h2>Integration of Technology</h2>
      <p>Modern psychiatric practice increasingly incorporates technology, from electronic health records that improve care coordination to telehealth platforms that expand access. PAs have been quick to adopt these innovations, often leading the way in implementation.</p>
      
      <h2>Collaborative Care Models</h2>
      
      <p>The collaborative care model, where PAs work closely with psychiatrists, primary care providers, and other professionals, has proven highly effective. This approach leverages our training in collaborative practice while ensuring patients receive comprehensive, coordinated care.</p>
      
      <h2>Specialization and Advanced Practice</h2>
      <p>Many PAs are pursuing specialized training in areas like addiction medicine, child and adolescent psychiatry, or geriatric mental health. This specialization allows us to provide expert care in complex areas while maintaining our collaborative approach.</p>
      
      <h2>The Future of PA Practice in Mental Health</h2>
      <p>As mental health needs continue to grow and evolve, PAs will likely play an even larger role in psychiatric care delivery. Our adaptability, collaborative training, and commitment to patient-centered care position us well for this expanding role.</p>
      
      <h2>Maintaining Quality and Standards</h2>
      <p>With expanded roles comes increased responsibility. Continued education, supervision when appropriate, and adherence to the highest standards of practice ensure that patients receive the quality care they deserve from PA providers.</p>
    `,
    category: "Professional Development",
    date: "2023-12-11",
    readTime: "9 min read"
  }
}

type BlogPost = {
  title: string
  excerpt: string
  content: string
  category: string
  date: string
  readTime: string
}

interface BlogPostPageProps {
  params: {
    slug: string
  }
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const post = blogPosts[params.slug as keyof typeof blogPosts]
  
  if (!post) {
    return {
      title: 'Blog Post Not Found',
      description: 'The requested blog post could not be found.'
    }
  }

  return {
    title: post.title,
    description: post.excerpt,
  }
}

export async function generateStaticParams() {
  return Object.keys(blogPosts).map((slug) => ({
    slug,
  }))
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const post = blogPosts[params.slug as keyof typeof blogPosts]

  if (!post) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <div className="container mx-auto px-4 py-20 max-w-4xl">
        {/* Back Button */}
        <div className="mb-8">
          <Button asChild variant="outline">
            <Link href="/blog">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Blog
            </Link>
          </Button>
        </div>

        {/* Article Header */}
        <article className="prose prose-lg max-w-none">
          <div className="mb-8">
            <div className="flex items-center gap-2 mb-4">
              <Badge className="bg-blue-100 text-blue-800">
                {post.category}
              </Badge>
              <div className="flex items-center gap-4 text-sm text-gray-500">
                <div className="flex items-center gap-1">
                  <Calendar className="h-4 w-4" />
                  <span>{new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="h-4 w-4" />
                  <span>{post.readTime}</span>
                </div>
              </div>
            </div>
            
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-tight">
              {post.title}
            </h1>
            
            <p className="text-xl text-gray-600 leading-relaxed mb-8">
              {post.excerpt}
            </p>

            {/* Author info */}
            <div className="flex items-center gap-4 p-6 bg-blue-50 rounded-lg mb-8">
              <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center">
                <User className="h-6 w-6 text-blue-600" />
              </div>
              <div>
                <p className="font-semibold text-gray-900">Stephen McCarthy PA-C</p>
                <p className="text-gray-600 text-sm">Physician Assistant & Clinical Director</p>
              </div>
            </div>
          </div>

          {/* Article Content */}
          <div 
            className="prose prose-lg max-w-none text-gray-700 leading-relaxed"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          {/* Article Footer */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4">About the Author</h3>
                <p className="text-gray-600 leading-relaxed">
                  Stephen McCarthy PA-C is an experienced physician assistant and clinical director at Lehigh Valley Wellness, 
                  specializing in comprehensive psychiatric care, addiction medicine, and community health services. 
                  With over 8 years of experience, he is committed to providing accessible, compassionate mental healthcare 
                  to individuals and families throughout the Lehigh Valley region.
                </p>
                <div className="mt-4">
                  <Button asChild>
                    <Link href="/about">
                      Learn More About Stephen
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Related Articles */}
          <div className="mt-12">
            <h3 className="text-2xl font-semibold mb-6">Continue Reading</h3>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild variant="outline" className="flex-1">
                <Link href="/blog">
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  All Articles
                </Link>
              </Button>
              <Button asChild className="flex-1">
                <Link href="/contact">
                  Get In Touch
                </Link>
              </Button>
            </div>
          </div>
        </article>
      </div>
    </div>
  )
}
