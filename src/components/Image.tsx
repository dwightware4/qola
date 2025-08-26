import type { StaticImageData as StaticImageDataT } from 'next/image'
import NextImage from 'next/image'

type PropsT = {
  src: string | StaticImageDataT
  description: string
  className?: string
  width?: number
  height?: number
  unoptimized?: boolean
  layout?: string
  fill?: boolean
  priority?: boolean
}

export const Image = (props: PropsT) => {
  const { src, width, height, description, ...rest } = props

  const srcPath = typeof src === 'string' ? `/images/${src}` : src

  return <NextImage src={srcPath} width={width} height={height} alt={description} {...rest} />
}
