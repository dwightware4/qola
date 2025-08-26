'use client'

import type { DropzoneProps } from '@mantine/dropzone'
import { Group, Text } from '@mantine/core'
import { IMAGE_MIME_TYPE, Dropzone as MantineDropzone } from '@mantine/dropzone'

import { ArrowUpOnSquareIcon, PhotoIcon, XMarkIcon } from '@/icons'

export const Dropzone = (props: Partial<DropzoneProps>) => (
  <MantineDropzone
    onDrop={files => console.log('accepted files', files)}
    onReject={files => console.log('rejected files', files)}
    maxSize={5 * 1024 ** 2}
    accept={IMAGE_MIME_TYPE}
    {...props}
  >
    <Group justify="center" gap="xl" mih={220} style={{ pointerEvents: 'none' }}>
      <MantineDropzone.Accept>
        <ArrowUpOnSquareIcon />
        {/* <IconUpload size={52} color="var(--mantine-color-blue-6)" stroke={1.5} /> */}
      </MantineDropzone.Accept>

      <MantineDropzone.Reject>
        <XMarkIcon />
        {/* <IconX size={52} color="var(--mantine-color-red-6)" stroke={1.5} /> */}
      </MantineDropzone.Reject>

      <MantineDropzone.Idle>
        <PhotoIcon className="w-14" />
        {/* <IconPhoto size={52} color="var(--mantine-color-dimmed)" stroke={1.5} /> */}
      </MantineDropzone.Idle>

      <div>
        <Text size="xl" inline>
          Drag images here or click to select files
        </Text>
        <Text size="sm" c="dimmed" inline mt={7}>
          Attach as many files as you like, each file should not exceed 5mb
        </Text>
      </div>
    </Group>
  </MantineDropzone>
)
