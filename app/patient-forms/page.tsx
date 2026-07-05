import { Metadata } from 'next'
import { ClipboardList, FileText, ShieldCheck } from 'lucide-react'
import AdobeFormEmbed from '@/components/adobe-form-embed'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Patient Forms',
  description:
    'Complete patient forms for Stephen McCarthy PA-C, including the new peptide therapy patient form.',
}

export default function PatientFormsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <section className="relative overflow-hidden bg-gradient-to-r from-blue-600 to-teal-700 py-20 text-white">
        <div className="absolute inset-0 bg-black/20" />
        <div className="container relative z-10 mx-auto max-w-6xl px-4">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-white/15">
              <ClipboardList className="h-8 w-8" />
            </div>
            <h1 className="mb-6 text-4xl font-bold md:text-5xl">Patient Forms</h1>
            <p className="text-xl text-blue-100">
              Complete required intake documents securely online before your appointment.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="mb-10 grid gap-6 md:grid-cols-2">
            <Card className="shadow-lg">
              <CardContent className="flex gap-4 p-6">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-blue-100">
                  <FileText className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h2 className="mb-2 text-xl font-semibold text-gray-900">
                    New Peptide Therapy Patients
                  </h2>
                  <p className="text-gray-600">
                    Use the embedded form below to submit your new patient peptide therapy paperwork.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-lg">
              <CardContent className="flex gap-4 p-6">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-teal-100">
                  <ShieldCheck className="h-6 w-6 text-teal-600" />
                </div>
                <div>
                  <h2 className="mb-2 text-xl font-semibold text-gray-900">Secure Completion</h2>
                  <p className="text-gray-600">
                    The form is provided through Adobe Acrobat Sign for secure digital completion.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card className="shadow-xl">
            <CardContent className="p-4 md:p-8">
              <div className="mb-6">
                <h2 className="text-2xl font-bold text-gray-900">Peptide Therapy New Patient Form</h2>
                <p className="mt-2 text-gray-600">
                  Please complete all required fields and submit the form when finished.
                </p>
              </div>
              <AdobeFormEmbed />
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  )
}
