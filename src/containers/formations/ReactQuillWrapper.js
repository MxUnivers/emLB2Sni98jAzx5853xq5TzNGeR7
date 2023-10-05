import React, { useEffect } from 'react';
import { useQuill } from 'react-quilljs';
import 'quill/dist/quill.snow.css';

const ReactQuillWrapper = ({ value, onChange }) => {
  const { quill, quillRef } = useQuill();

  useEffect(() => {
    if (quill) {
      quill.on('text-change', () => {
        const htmlContent = quill.root.innerHTML;
        onChange(htmlContent);
      });
    }
  }, [quill, onChange]);

  return (
    <div ref={quillRef} style={{ height: '200px' }} />
  );
};

export default ReactQuillWrapper;
