import React from 'react';
import { Layout } from '../../layout/structure/Layout';
import { Notes } from './note/Notes';

export function Dashboard() {
  return (
    <Layout>
      <Notes />
    </Layout>
  );
}
