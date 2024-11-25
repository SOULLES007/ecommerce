'use client'
import React from 'react'
import Link from 'next/link'
import { Category } from '../../../../payload/payload-types'
import { useFilter } from '../../../_providers/Filter'
import classes from './index.module.scss'

// Define Media type if not already defined
type Media = {
  url: string
}

type CategoryCardProps = {
  category: Category
}

const CategoryCard = ({ category }: CategoryCardProps) => {
  const media = category.media as Media | null
  const { setCategoryFilters } = useFilter()

  // Fallback background style if no media
  const backgroundStyle = media?.url 
    ? { backgroundImage: `url(${media.url})` }
    : { backgroundColor: '#f0f0f0' } // Fallback background color

  return (
    <Link
      href="/products"
      className={classes.card}
      style={backgroundStyle}
      onClick={() => setCategoryFilters([category.id])}
    >
      <p className={classes.title}>
        {category.title || 'Untitled Category'}
      </p>
    </Link>
  )
}

export default CategoryCard