"use client"

import { SignIn } from '@clerk/nextjs'
import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import { MessageSquare } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"

export default function SignInPage() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md"
      >
        <Card className="border border-gray-200 shadow-lg">
          <CardHeader className="space-y-1 text-center">
            <CardTitle className="text-2xl font-semibold tracking-tight text-gray-900">
              <motion.div
                initial={{ scale: 0.95 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 200, damping: 10 }}
                className="flex items-center justify-center space-x-2 mb-2"
              >
                <MessageSquare className="w-6 h-6 text-blue-600" />
                <span className="text-blue-600">
                  ChatPro
                </span>
              </motion.div>
              Sign in to your account
            </CardTitle>
            <CardDescription className="text-gray-500">
              Enter your credentials to access your account
            </CardDescription>
          </CardHeader>
          <CardContent>
            {mounted && (
              <SignIn 
                afterSignInUrl={'/'}
                appearance={{
                  elements: {
                    formButtonPrimary: 
                      'bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded transition-colors duration-200',
                    footerActionLink: 'text-blue-600 hover:text-blue-700 transition-colors duration-200',
                    card: 'bg-white shadow-none',
                    headerTitle: 'sr-only',
                    headerSubtitle: 'sr-only',
                    formFieldLabel: 'text-gray-700 font-medium',
                    formFieldInput: 'border-gray-300 text-gray-900 rounded-md focus:ring-blue-500 focus:border-blue-500',
                    identityPreviewText: 'text-gray-700',
                    identityPreviewEditButton: 'text-blue-600 hover:text-blue-700',
                    formFieldInputShowPasswordButton: 'text-gray-500 hover:text-gray-700',
                    otpCodeFieldInput: 'border-gray-300 text-gray-900 rounded-md focus:ring-blue-500 focus:border-blue-500',
                  },
                }}
              />
            )}
          </CardContent>
        </Card>
      </motion.div>
    </div>
  )
}
