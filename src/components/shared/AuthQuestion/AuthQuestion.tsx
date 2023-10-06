import type { AuthQuestionProps } from './types'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import React from 'react'

const AuthQuestion: React.FC<AuthQuestionProps> = ({ linkText, questionText, redirectUrl }) => {
  const { t } = useTranslation()

  return (
    <p className='text-center mt-4 text-base lg:text-lg font-medium text-gray-500'>
      {t(questionText)}?{' '}
      <Link className='text-blue-600 hover:text-blue-500' to={redirectUrl}>
        {t(linkText)}
      </Link>
    </p>
  )
}

export default AuthQuestion
