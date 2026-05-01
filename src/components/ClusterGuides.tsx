import React from 'react';
import { Link } from 'react-router-dom';
import type { Star } from '../data/clusters';
import { getPostBySlug, formatDate } from '../utils/blog';
import './ClusterGuides.css';

interface ClusterGuidesProps {
  stars: Star[];
  clusterShortName: string;
}

const ClusterGuides: React.FC<ClusterGuidesProps> = ({ stars, clusterShortName }) => {
  // Look up published posts for each star that has an article slug
  const guides = stars
    .map((star) => {
      if (star.articleStatus === 'published' && star.articleSlug) {
        const post = getPostBySlug(star.articleSlug);
        if (post) return { star, post };
      }
      return null;
    })
    .filter((entry): entry is { star: Star; post: ReturnType<typeof getPostBySlug> & object } => entry !== null);

  // Don't render the section if no published guides yet
  if (guides.length === 0) return null;

  return (
    <div className="cluster-guides">
      <h4 className="cluster-guides-heading">
        📚 Wonderland Guides for {clusterShortName}
      </h4>
      <div className="cluster-guides-grid">
        {guides.map(({ star, post }) => (
          <Link
            key={star.articleSlug}
            to={`/blog/${star.articleSlug}`}
            className="cluster-guide-card"
          >
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
              <span className="cluster-guide-cta">Read the guide →</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ClusterGuides;
