import React from 'react';
import { Link } from 'react-router-dom';
import type { Star } from '../data/clusters';
import type { BlogPost } from '../types/blog';
import { getPostBySlug, formatDate, isPostPublished } from '../utils/blog';
import './ClusterGuides.css';

interface ClusterGuidesProps {
  stars: Star[];
  clusterShortName: string;
}

const ClusterGuides: React.FC<ClusterGuidesProps> = ({ stars, clusterShortName }) => {
  // Look up guide posts and let future-dated posts show as scheduled previews.
  const guides = stars
    .map((star) => {
      if (star.articleSlug) {
        const post = getPostBySlug(star.articleSlug);
        if (post) return { star, post };
      }
      return null;
    })
    .filter((entry): entry is { star: Star; post: BlogPost } => entry !== null);

  // Don't render the section if no guides exist yet.
  if (guides.length === 0) return null;

  return (
    <div className="cluster-guides">
      <h4 className="cluster-guides-heading">
        📚 Wonderland Guides for {clusterShortName}
      </h4>
      <div className="cluster-guides-grid">
        {guides.map(({ star, post }) => {
          const isAvailable = star.articleStatus === 'published' && isPostPublished(post.date);
          const cardContent = (
            <>
              {post.image && (
                <div className="cluster-guide-image-wrapper">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="cluster-guide-image"
                    loading="lazy"
                  />
                </div>
              )}
              <div className="cluster-guide-body">
                <div className="cluster-guide-character">
                  <span className="cluster-guide-emoji">{star.characterEmoji}</span>
                  <span className="cluster-guide-charname">{star.character}</span>
                </div>
                <h5 className="cluster-guide-title">{post.title}</h5>
                <div className="cluster-guide-meta">
                  <span>{formatDate(post.date)}</span>
                  <span>{post.readTime}</span>
                </div>
                <span className={`cluster-guide-cta ${isAvailable ? '' : 'is-scheduled'}`}>
                  {isAvailable ? 'Read the guide ->' : `Scheduled for ${formatDate(post.date)}`}
                </span>
              </div>
            </>
          );

          if (isAvailable) {
            return (
              <Link
                key={star.articleSlug}
                to={`/blog/${star.articleSlug}`}
                className="cluster-guide-card"
              >
                {cardContent}
              </Link>
            );
          }

          return (
            <div
              key={star.articleSlug}
              className="cluster-guide-card is-scheduled"
              aria-disabled="true"
            >
              {cardContent}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ClusterGuides;
