
import Link from 'next/link'
import { Stethoscope, MapPin, Phone, Mail } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 max-w-6xl py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center space-x-3 mb-4">
              <div className="bg-blue-600 p-2 rounded-lg">
                <Stethoscope className="h-6 w-6 text-white" />
              </div>
              <div>
                <div className="font-bold text-lg">Stephen McCarthy</div>
                <div className="text-sm text-blue-400">PA-C</div>
              </div>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed">
              Dedicated to providing compassionate, comprehensive healthcare and mental wellness services to the Lehigh Valley community.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-gray-400 hover:text-white transition-colors text-sm">
                  About Me
                </Link>
              </li>
              <li>
                <Link href="/professional-journey" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Professional Journey
                </Link>
              </li>
              <li>
                <Link href="/testimonials" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Testimonials
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Expertise</h3>
            <ul className="space-y-2">
              <li className="text-gray-400 text-sm">General Psychiatry</li>
              <li className="text-gray-400 text-sm">Child/Adolescent Care</li>
              <li className="text-gray-400 text-sm">Geriatric Psychiatry</li>
              <li className="text-gray-400 text-sm">Addiction Medicine</li>
              <li className="text-gray-400 text-sm">Telehealth Services</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Practice Info</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-blue-400" />
                <span className="text-gray-400 text-sm">Lehigh Valley, PA</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-blue-400" />
                <span className="text-gray-400 text-sm">Professional Inquiries</span>
              </div>
              <div className="text-gray-400 text-sm">
                <p>In-Person & Telehealth</p>
                <p>Evening Hours Available</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-400 text-sm">
            © {new Date().getFullYear()} Stephen McCarthy PA-C. Professional healthcare services.
          </div>
          <div className="mt-4 md:mt-0 text-gray-400 text-sm">
            <span>Lehigh Valley Wellness • Pennsylvania</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
