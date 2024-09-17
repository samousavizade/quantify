'use client';

import { useState } from 'react';
import '@/css/courses_sliderbar.css';
import {
  FaBrain,
  FaCalculator,
  FaChartLine,
  FaChartPie,
  FaCode,
  FaCommentDots,
  FaDatabase,
  FaFlask,
  FaLanguage,
  FaProjectDiagram,
  FaRobot,
  FaShoppingBasket,
} from 'react-icons/fa';
import { LinkButton } from '@dlarroder/playground';
import { motion } from 'framer-motion';
import CourseCard from '../../CourseCard';
import { FaArrowTrendUp } from 'react-icons/fa6';

function filterCourses(
  coursesData: any,
  searchValue: string,
  selectedField: string,
  selectedTags: string[]
) {
  return coursesData.filter((course: any) => {
    const searchContent =
      course.title + course.field + course.chapters?.join('') + course.tags?.join(' ');
    const matchesSearchValue = searchContent.toLowerCase().includes(searchValue.toLowerCase());

    // If there are selected field, only include posts that match
    const matchesField = selectedField === '' || course.field === selectedField;

    // If there are selected tags, only include posts that have all selected tags
    const matchesTags =
      selectedTags.length === 0 || selectedTags.every((tag) => course.tags?.includes(tag));

    return matchesSearchValue && matchesField && matchesTags;
  });
}

const coursesMetaData = {
  'Introduction to Financial Time Series': {
    imageSrc: '/static/images/AnIntroductionToFinTimeSeries.jpeg',
    title: 'Introduction to Financial Time Series',
    date: '2024-03-29',
    field: 'Time Series',
    tags: [
      'AR',
      'MA',
      'Stationary',
      'Seasonal',
      'ARCH',
      'GARCH',
      'CHARMA',
      'Random Coefficient',
      'TAR',
      'STAR',
      'Markov Switching',
      'State Space',
      'Neural Networks',
      'Non Parametric Methods',
    ],
    provider: 'Quantifiable',
    rating: 4,
    timeNeeded: '16 Hours',
    level: 'Beginner',
  },
  'Introduction to Quantitative Economics': {
    imageSrc: '/static/images/AdvancesInQuantitativeEconomics.jpeg',
    title: 'Introduction to Quantitative Economics',
    date: '2024-03-08',
    field: 'Quantitative Economics',
    tags: [
      'Linear Dynamics',
      'Nonlinear Dynamics',
      'Stochastic Dynamics',
      'Markov Chains',
      'Monte Carlo',
      'Optimization',
      'Linear Programming',
    ],
    provider: 'Quantifiable',
    rating: 4,
    timeNeeded: '6 Hours',
    level: 'Beginner',
  },
  'Introduction to Reinforcement Learning': {
    imageSrc: '/static/images/IntroductionToRL.jpeg',
    title: 'Introduction to Reinforcement Learning',
    date: '2024-01-21',
    field: 'Reinforcement Learning',
    tags: [
      'Markov Decision Process',
      'Value Iteration',
      'Q Learning',
      'Stochastic Policy',
      'Bellman Equation',
      'Exploration and Exploitation',
      'Self-correcting',
      'Open AI Gym',
    ],
    provider: 'Quantifiable',
    rating: 5,
    timeNeeded: '6 Hours',
    level: 'Beginner',
  },
  'Advances in Quantitative Economics': {
    imageSrc: '/static/images/AnIntroductoryCourseinQuantitativeEconomicsUsingPython.jpg',
    title: 'Advances in Quantitative Economics',
    date: '2024-03-08',
    field: 'Quantitative Economics',
    tags: [
      'Nonlinear Dynamics',
      'Stochastic Dynamics',
      'Markov Process',
      'Monte Carlo',
      'Linear Programming',
      'LQ Control',
      'Search',
      'Agent Model',
      'Auction',
    ],
    provider: 'Quantifiable',
    rating: 4.5,
    timeNeeded: '20 Hours',
    level: 'Advance',
  },
  'Latest Advancements in Financial Machine Learning': {
    imageSrc:
      '/static/images/AnAdvancedCourseontheLatestAdvancementsinFinancialMachineLearning.jpg',
    title: 'Latest Advancements in Financial Machine Learning',
    date: '2024-03-02',
    field: 'Quantitative Finance',
    tags: [
      'Financial Data Science',
      'Financial Data Structures',
      'Feature Engineering',
      'Financial Modeling',
      'Backtesting',
      'Bet Sizing',
      'Cross-Validation',
      'Structural Breaks',
      'Optimization',
    ],
    provider: 'Quantifiable',
    rating: 4.5,
    timeNeeded: '20 Hours',
    level: 'Advance',
  },
  'Advances in Econometrics': {
    imageSrc: '/static/images/AdvancesInEconometrics.jpg',
    title: 'Advances in Econometrics',
    date: '2024-03-02',
    field: 'Econometrics',
    tags: [
      'Heteroskedasticity',
      'Homoskedasticity',
      'Proxy Variable',
      'Specification',
      'LAD Model',
      'Asymptotic',
      'Stationary',
      'Serial Correlation',
      'GLS',
      'FGLS',
      'ARCH',
      'GARCH',
    ],
    provider: 'Quantifiable',
    rating: 4.5,
    timeNeeded: '20 Hours',
    level: 'Advance',
  },
  'Advances in Recommender Systems': {
    imageSrc: '/static/images/AdvancesInRecommenderSystems.jpg',
    title: 'Advances in Recommender Systems',
    date: '2024-06-02',
    field: 'Recommender Systems',
    tags: [
      'Matrix Factorization',
      'Collaborative Filtering',
      'Neu-MF',
      'Auto-Rec',
      'Personalized Ranking',
      'BPR',
      'Sequence Aware',
      'Factorization Machines',
      'Deep Factorization Machines',
    ],
    provider: 'Quantifiable',
    rating: 4.4,
    timeNeeded: '30 Hours',
    level: 'Advance',
  },
  'Causal Factor Investing': {
    imageSrc: '/static/images/CausalFactorInvesting.png',
    title: 'Causal Factor Investing',
    date: '2024-05-02',
    field: 'Causality',
    tags: [
      'Monte Carlo',
      'Factor Investing',
      'Falsifiability',
      'Interventional Studies',
      'Natural Experiments',
      'Simulated Interventions',
      'RDD',
      'DiD',
      'Backdoor Adjustment',
    ],
    provider: 'Quantifiable',
    rating: 4.75,
    timeNeeded: '20 Hours',
    level: 'Advance',
  },
};

export default function CoursesListLayout() {
  const [searchValue, setSearchValue] = useState<string>('');
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [selectedField, setSelectedField] = useState('');
  const [headerTitle, setHeaderTitle] = useState('Courses');

  const coursesData = Object.values(coursesMetaData);
  const filteredCourses = filterCourses(coursesData, searchValue, selectedField, selectedTags);
  const [pagination, setPagination] = useState({
    filteredCourses: filteredCourses,
  });

  const allTags = [...new Set(coursesData.flatMap((course) => course.tags))];
  // @ts-ignore
  const sortedTags = Object.values(allTags).sort((a, b) => allTags[b] - allTags[a]);

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
      const filteredCourses = filterCourses(
        coursesData,
        searchValue,
        selectedField,
        newSelectedTags
      );
      return {
        ...prevPagination,
        filteredCourses: filteredCourses,
      };
    });
  };

  const handleFieldClick = (field: string) => {
    setHeaderTitle(field);
    setSelectedField(field);

    setPagination((prevPagination) => {
      // New field is field, don't use selectedField that maybe didn't update.
      const filteredCourses = filterCourses(coursesData, searchValue, field, selectedTags);
      return {
        ...prevPagination,
        filteredCourses: filteredCourses,
      };
    });

    console.log('Len of Filtered Courses field click', filteredCourses.length);
  };

  const handleSearchValue = (searchValue: string) => {
    setPagination((prevPagination) => {
      // New tags is newSelectedTags, don't use selectedTags that maybe didn't update.
      const filteredCourses = filterCourses(coursesData, searchValue, selectedField, selectedTags);
      return { ...prevPagination, filteredCourses: filteredCourses };
    });
  };

  const allFields = Array.from(new Set(coursesData.map((p: { field: string }) => p.field))).sort();

  const fieldToIcon = new Map(
    Object.entries({
      'Quantitative Finance': <FaChartLine />,
      'Quantitative Economics': <FaCalculator />,
      'Machine Learning': <FaRobot />,
      Econometrics: <FaChartPie />,
      'Recommender Systems': <FaShoppingBasket />,
      Causality: <FaFlask />,
      'Algorithm Design': <FaCode />,
      'Data Structure': <FaDatabase />,
      NLP: <FaLanguage />,
      'Time Series': <FaArrowTrendUp />,
      'Reinforcement Learning': <FaBrain />,
      'Causal Inference': <FaProjectDiagram />,
      Other: <FaCommentDots />,
    })
  );

  return (
    <div>
      <motion.h1
        key={'search'}
        className="py-2 text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-5xl md:leading-14"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        Search
      </motion.h1>
      <div className="w-full bg-bg-gray-100 dark:bg-gray-800 p-6 rounded-2xl">
        <span className="text-left text-lg font-semibold">Fields</span>
        <div className="flex justify-items-stretch justify-around flex-wrap mb-4">
          <div className="flex flex-row flex-wrap gap-5">
            {allFields.map((field: any, index) => {
              return (
                <LinkButton
                  key={index}
                  className={`flex items-center p-2 text-sm ${
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
        </div>
      </div>

      <div className="w-full bg-bg-gray-100 dark:bg-gray-800 p-6 mt-3 rounded-2xl">
        <span className="text-left text-lg font-semibold">Tags</span>
        <div className="flex flex-row flex-wrap gap-2 mt-3">
          {sortedTags.map((tag: any) => (
            <button
              key={tag}
              onClick={() => {
                handleTagClick(tag);
              }}
              className={`rounded-md p-1.5 text-xs uppercase text-white dark:text-black duration-300 ${
                selectedTags.includes(tag as string)
                  ? 'bg-primary-700 dark:bg-primary-300'
                  : 'bg-primary-500 hover:bg-primary-400 active:bg-primary-700'
              }`}
            >
              {`${tag}`}
            </button>
          ))}
        </div>
      </div>

      <div className="w-full bg-bg-gray-100 dark:bg-gray-800 p-2 mt-3 rounded-2xl">
        <input
          aria-label="Search articles"
          type="text"
          onChange={(e) => {
            setSearchValue(e.target.value);
            handleSearchValue(e.target.value);
          }}
          placeholder="Search courses"
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

      <motion.h1
        key={headerTitle}
        className="mt-2 py-1 text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-5xl md:leading-14"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        {headerTitle}
      </motion.h1>
      <div className="space-y-2 pt-3 pb-3 md:space-y-5">
        <CourseCard courses={pagination.filteredCourses} />
      </div>
    </div>
  );
}
