import { AllHTMLAttributes, useCallback, useEffect, useState } from 'react';
import { remark } from 'remark';
import html from 'remark-html';

interface ArticleContentProps extends AllHTMLAttributes<HTMLDivElement> {
  content: string;
}

export default function ArticleContent({ className, content }: ArticleContentProps) {
  // callback
  const getPostHtml = useCallback(async (content: string) => {
    const processedContent = await remark().use(html).process(content);
    const contentHtml = processedContent.toString();
    return contentHtml;
  }, []);

  // state
  const [postHtml, setPostHtml] = useState('');

  // effect
  useEffect(() => {
    getPostHtml(content).then((val) => {
      setPostHtml(val);
    });
  }, [getPostHtml, content]);

  return (
    <div className="w-full pt-10 pb-6 border-b markdown-content">
      <div dangerouslySetInnerHTML={{ __html: postHtml }} />
    </div>
  );
}
