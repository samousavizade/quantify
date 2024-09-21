'use client';

import Pagination from '@/components/Pagination';
import PostCard from '@/components/PostCard';
import { CoreContent, getAllTags } from '@/lib/utils/contentlayer';
import type { Blog } from 'contentlayer/generated';
import { allBlogs } from 'contentlayer/generated';
import { useState } from 'react';
import '@/css/tags_sidebar.css';
import {
  FaCalculator,
  FaChartLine,
  FaChartPie,
  FaCode,
  FaCommentDots,
  FaDatabase,
  FaLanguage,
  FaProjectDiagram,
  FaRobot,
} from 'react-icons/fa';
import { LinkButton } from '@dlarroder/playground';
import { motion } from 'framer-motion';
import { POSTS_PER_PAGE } from '@/types/default';

interface Props {
  posts: CoreContent<Blog>[];
}

function filterPosts(
  posts: CoreContent<Blog>[],
  searchValue: string,
  selectedField: string,
  selectedTags: string[]
) {
  return posts.filter((post) => {
    const searchContent = post.title + post.field + post.summary + post.tags?.join(' ');
    const matchesSearchValue = searchContent.toLowerCase().includes(searchValue.toLowerCase());

    // If there are selected field, only include posts that match
    const matchesField = selectedField === '' || post.field === selectedField;

    // If there are selected tags, only include posts that have all selected tags
    const matchesTags =
      selectedTags.length === 0 || selectedTags.every((tag) => post.tags?.includes(tag));

    return matchesSearchValue && matchesField && matchesTags;
  });
}

export default function BlogPostsListLayout({ posts }: Props) {
  const [searchValue, setSearchValue] = useState<string>('');
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [selectedField, setSelectedField] = useState('');
  const [headerTitle, setHeaderTitle] = useState('Blog');

  const filteredBlogPosts = filterPosts(posts, searchValue, selectedField, selectedTags);
  const [pagination, setPagination] = useState({
    currentPage: 1,
    filteredPosts: filteredBlogPosts,
    totalPages: Math.ceil(filteredBlogPosts.length / POSTS_PER_PAGE),
  });

  const initialDisplayPosts = pagination.filteredPosts.slice(
    (pagination.currentPage - 1) * POSTS_PER_PAGE,
    pagination.currentPage * POSTS_PER_PAGE
  );
  const displayPosts = initialDisplayPosts.length > 0 && initialDisplayPosts;

  const handleNextPage = () => {
    setPagination((prevPagination) => {
      const nextPage = prevPagination.currentPage + 1;
      if (nextPage <= prevPagination.totalPages) {
        return {
          ...prevPagination,
          currentPage: nextPage,
        };
      }
      return prevPagination; // Return the current state if already on the last page
    });
  };

  const handlePreviousPage = () => {
    setPagination((prevPagination) => {
      const prevPage = prevPagination.currentPage - 1;
      if (prevPage >= 1) {
        return {
          ...prevPagination,
          currentPage: prevPage,
        };
      }
      return prevPagination; // Return the current state if already on the first page
    });
  };

  const allTags = getAllTags(allBlogs);
  const sortedTags = Object.keys(allTags).sort((a, b) => allTags[b] - allTags[a]);

  const handleTagClick = (tag: string | undefined) => {
    let newSelectedTags: string[];
    if (selectedTags.includes(tag as string)) {
      newSelectedTags = selectedTags.filter((t) => t !== tag);
      setSelectedTags(newSelectedTags);
    } else {
      // @ts-ignore
      newSelectedTags = [...selectedTags, tag];
      setSelectedTags(newSelectedTags);
    }
    setPagination((prevPagination) => {
      // New tags is newSelectedTags, don't use selectedTags that maybe didn't update.
      const filteredPosts = filterPosts(posts, searchValue, selectedField, newSelectedTags);
      const totalPage = Math.ceil(filteredPosts.length / POSTS_PER_PAGE);
      return {
        ...prevPagination,
        currentPage: 1,
        filteredCourses: filteredPosts,
        totalPages: totalPage,
      };
    });
  };

  const handleFieldClick = (field: string) => {
    setHeaderTitle(field);
    setSelectedField(field);

    setPagination((prevPagination) => {
      // New field is field, don't use selectedField that maybe didn't update.
      const filteredPosts = filterPosts(posts, searchValue, field, selectedTags);
      const totalPage = Math.ceil(filteredPosts.length / POSTS_PER_PAGE);
      return { ...prevPagination, filteredCourses: filteredPosts, totalPages: totalPage };
    });
  };

  const handleSearchValue = (searchValue: string) => {
    setPagination((prevPagination) => {
      // New tags is newSelectedTags, don't use selectedTags that maybe didn't update.
      const filteredPosts = filterPosts(posts, searchValue, selectedField, selectedTags);
      const totalPage = Math.ceil(filteredPosts.length / POSTS_PER_PAGE);
      return { ...prevPagination, filteredCourses: filteredPosts, totalPages: totalPage };
    });
  };

  const allFields = Array.from(new Set(posts.map((p) => p.field))).sort();

  const fieldToIcon = new Map(
    Object.entries({
      'Quantitative Finance': <FaChartLine />,
      'Quantitative Economics': <FaCalculator />,
      'Machine Learning': <FaRobot />,
      Econometrics: <FaChartPie />,
      'Algorithm Design': <FaCode />,
      'Data Structure': <FaDatabase />,
      NLP: <FaLanguage />,
      'Causal Inference': <FaProjectDiagram />,
      Other: <FaCommentDots />,
    })
  );

  return (
    <div className={'wrapper'}>
      <div className="sidebar bg-gray-100 dark:bg-gray-800 p-6 rounded-2xl">
        <div className="mb-4">
          <div className="flex items-center justify-items-center mb-4">
            <span className="text-lg font-semibold">Fields</span>
            {selectedField !== '' && (
              <LinkButton
                onClick={() => {
                  setSelectedField('');
                  setHeaderTitle('Blog');
                  setPagination((prevPagination) => {
                    const filteredPosts = filterPosts(posts, searchValue, '', selectedTags);
                    const totalPage = Math.ceil(filteredPosts.length / POSTS_PER_PAGE);
                    return {
                      ...prevPagination,
                      currentPage: 1,
                      filteredCourses: filteredPosts,
                      totalPages: totalPage,
                    };
                  });
                }}
                className="flex p-1.5 text-xs uppercase ml-auto"
              >
                Clear
              </LinkButton>
            )}
          </div>
          {allFields.map((field, index) => {
            return (
              <LinkButton
                key={index}
                className={`flex items-center p-2 my-2 text-sm ${
                  headerTitle === field ? 'bg-primary-500' : ''
                }`}
                onClick={() => {
                  handleFieldClick(field);
                }}
              >
                <span className="mr-2 text-lg">{fieldToIcon.get(field)}</span>
                <span className={'ml-2 text-xl'}>{field}</span>
              </LinkButton>
            );
          })}
        </div>

        <div className="flex items-center justify-items-center mb-4">
          <span className="text-lg font-semibold">Tags</span>
          {selectedTags.length > 0 && (
            <LinkButton
              onClick={() => {
                setSelectedTags([]);
                setPagination((prevPagination) => {
                  const filteredPosts = filterPosts(posts, searchValue, selectedField, []);
                  const totalPage = Math.ceil(filteredPosts.length / POSTS_PER_PAGE);
                  return {
                    ...prevPagination,
                    currentPage: 1,
                    filteredCourses: filteredPosts,
                    totalPages: totalPage,
                  };
                });
              }}
              className="flex p-1.5 text-xs uppercase ml-auto"
            >
              Clear
            </LinkButton>
          )}
        </div>
        {sortedTags.map((tag) => (
          <button
            key={tag}
            onClick={() => handleTagClick(tag)}
            className={`rounded-md p-1.5 m-1 text-xs uppercase text-white dark:text-black duration-300 ${
              selectedTags.includes(tag as string)
                ? 'bg-primary-700 dark:bg-primary-300'
                : 'bg-primary-500 hover:bg-primary-400 active:bg-primary-700'
            }`}
          >
            {`${tag}: ${allTags[tag]}`}
          </button>
        ))}
      </div>
      <div className={'content'}>
        <div className="space-y-2 rounded-lg pt-3 pb-3 md:space-y-5">
          <motion.h1
            key={headerTitle}
            className="py-2 text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-5xl md:leading-14"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            {headerTitle}
          </motion.h1>
          <div className="relative max-w-full">
            <input
              aria-label="Search articles"
              type="text"
              onChange={(e) => {
                setSearchValue(e.target.value);
                handleSearchValue(e.target.value);
              }}
              placeholder="Search articles"
              className="block w-full rounded-md border-0 bg-gray-200 bg-opacity-50 px-4 py-3 text-gray-900 focus:border-sky-500 focus:ring-sky-500 dark:border-gray-900 dark:bg-gray-800 dark:text-gray-100"
            />
            <svg
              className="absolute right-3 top-3 h-6 w-6 text-gray-400 dark:text-gray-300"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
          <PostCard posts={!displayPosts ? [] : displayPosts} />
        </div>
        {pagination && pagination.totalPages > 1 && !searchValue && selectedTags.length === 0 && (
          <Pagination
            pagination={pagination}
            handleNextPage={handleNextPage}
            handlePreviousPage={handlePreviousPage}
          />
        )}
      </div>
    </div>
  );
}
