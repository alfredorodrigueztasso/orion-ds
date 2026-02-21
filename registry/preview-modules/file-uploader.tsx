/**
 * Preview module for FileUploader section
 * Drag & drop file upload zone for SaaS applications
 */

import React, { useState } from 'react';
import { FileUploader } from '@orion-ds/react';
import type { UploadedFile } from '@orion-ds/react';

export const previews = [
  {
    title: 'Basic File Uploader',
    render: () => {
      const [files, setFiles] = useState<UploadedFile[]>([]);

      const handleFilesAdded = (newFiles: File[]) => {
        const uploadedFiles: UploadedFile[] = newFiles.map((file) => ({
          id: `${file.name}-${Date.now()}`,
          name: file.name,
          size: file.size,
          type: file.type,
          status: 'completed' as const,
          file,
        }));
        setFiles([...files, ...uploadedFiles]);
      };

      const handleFileRemove = (fileId: string) => {
        setFiles(files.filter((f) => f.id !== fileId));
      };

      return (
        <div style={{ maxWidth: '600px', margin: '0 auto' }}>
          <FileUploader
            onFilesAdded={handleFilesAdded}
            onFileRemove={handleFileRemove}
            files={files}
            maxFiles={10}
            maxSize={10 * 1024 * 1024} // 10MB
          />
        </div>
      );
    },
  },
  {
    title: 'Image Upload Only',
    render: () => {
      const [files, setFiles] = useState<UploadedFile[]>([]);

      const handleFilesAdded = (newFiles: File[]) => {
        const uploadedFiles: UploadedFile[] = newFiles.map((file) => {
          const preview = file.type.startsWith('image/')
            ? URL.createObjectURL(file)
            : undefined;

          return {
            id: `${file.name}-${Date.now()}`,
            name: file.name,
            size: file.size,
            type: file.type,
            status: 'completed' as const,
            preview,
            file,
          };
        });
        setFiles([...files, ...uploadedFiles]);
      };

      const handleFileRemove = (fileId: string) => {
        setFiles(files.filter((f) => f.id !== fileId));
      };

      return (
        <div style={{ maxWidth: '600px', margin: '0 auto' }}>
          <FileUploader
            accept={['image/*']}
            onFilesAdded={handleFilesAdded}
            onFileRemove={handleFileRemove}
            files={files}
            maxFiles={5}
            maxSize={5 * 1024 * 1024} // 5MB
            placeholder="Drop image files here or click to browse"
          />
        </div>
      );
    },
  },
  {
    title: 'Compact Mode',
    render: () => {
      const [files, setFiles] = useState<UploadedFile[]>([]);

      const handleFilesAdded = (newFiles: File[]) => {
        const uploadedFiles: UploadedFile[] = newFiles.map((file) => ({
          id: `${file.name}-${Date.now()}`,
          name: file.name,
          size: file.size,
          type: file.type,
          status: 'completed' as const,
          file,
        }));
        setFiles([...files, ...uploadedFiles]);
      };

      const handleFileRemove = (fileId: string) => {
        setFiles(files.filter((f) => f.id !== fileId));
      };

      return (
        <div style={{ maxWidth: '500px', margin: '0 auto' }}>
          <FileUploader
            onFilesAdded={handleFilesAdded}
            onFileRemove={handleFileRemove}
            files={files}
            compact
            accept={['.pdf', '.doc', '.docx']}
            maxFiles={3}
          />
        </div>
      );
    },
  },
  {
    title: 'With Upload Progress',
    render: () => {
      const [files, setFiles] = useState<UploadedFile[]>([]);

      const handleFilesAdded = (newFiles: File[]) => {
        const uploadedFiles: UploadedFile[] = newFiles.map((file) => ({
          id: `${file.name}-${Date.now()}`,
          name: file.name,
          size: file.size,
          type: file.type,
          status: 'uploading' as const,
          progress: 0,
          file,
        }));

        setFiles([...files, ...uploadedFiles]);

        // Simulate upload progress
        uploadedFiles.forEach((uploadedFile) => {
          let progress = 0;
          const interval = setInterval(() => {
            progress += 10;
            if (progress > 100) {
              clearInterval(interval);
              setFiles((prev) =>
                prev.map((f) =>
                  f.id === uploadedFile.id ? { ...f, status: 'completed' as const, progress: 100 } : f
                )
              );
            } else {
              setFiles((prev) =>
                prev.map((f) => (f.id === uploadedFile.id ? { ...f, progress } : f))
              );
            }
          }, 300);
        });
      };

      const handleFileRemove = (fileId: string) => {
        setFiles(files.filter((f) => f.id !== fileId));
      };

      return (
        <div style={{ maxWidth: '600px', margin: '0 auto' }}>
          <FileUploader
            onFilesAdded={handleFilesAdded}
            onFileRemove={handleFileRemove}
            files={files}
            helperText="Files will be automatically uploaded"
          />
        </div>
      );
    },
  },
  {
    title: 'Error State',
    render: () => {
      const [files, setFiles] = useState<UploadedFile[]>([
        {
          id: '1',
          name: 'failed-upload.pdf',
          size: 2048000,
          type: 'application/pdf',
          status: 'error',
          error: 'Upload failed. Please try again.',
        },
      ]);

      const handleFilesAdded = (newFiles: File[]) => {
        const uploadedFiles: UploadedFile[] = newFiles.map((file) => ({
          id: `${file.name}-${Date.now()}`,
          name: file.name,
          size: file.size,
          type: file.type,
          status: 'completed' as const,
          file,
        }));
        setFiles([...files, ...uploadedFiles]);
      };

      const handleFileRemove = (fileId: string) => {
        setFiles(files.filter((f) => f.id !== fileId));
      };

      return (
        <div style={{ maxWidth: '600px', margin: '0 auto' }}>
          <FileUploader
            onFilesAdded={handleFilesAdded}
            onFileRemove={handleFileRemove}
            files={files}
            error="Maximum file size exceeded"
          />
        </div>
      );
    },
  },
];

export default previews;
