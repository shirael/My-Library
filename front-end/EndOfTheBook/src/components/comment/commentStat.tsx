import React from 'react';
import { Box, Typography, Paper } from '@mui/material';
import CommentIcon from '@mui/icons-material/Comment';
import BarChartIcon from '@mui/icons-material/BarChart';

interface CommentStatsProps {
  totalComments: number;
  averageCommentsPerPost: number;
}

const CommentStats: React.FC<CommentStatsProps> = ({ totalComments, averageCommentsPerPost }) => {
  return (
    <Paper elevation={3} sx={{ padding: 2, margin: 2, backgroundColor: '#f5f5f5' }}>
      <Box>
        <Typography variant="h5" component="h3" gutterBottom>
          סטטיסטיקות תגובות
        </Typography>
        <Box sx={{ display: 'flex', alignItems: 'center', marginBottom: 1 }}>
          <CommentIcon sx={{ marginRight: 1 }} />
          <Typography variant="body1">
            סך הכל תגובות: {totalComments}
          </Typography>
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <BarChartIcon sx={{ marginRight: 1 }} />
          <Typography variant="body1">
            ממוצע תגובות לפרק: {averageCommentsPerPost}
          </Typography>
        </Box>
      </Box>
    </Paper>
  );
};

export default CommentStats;
