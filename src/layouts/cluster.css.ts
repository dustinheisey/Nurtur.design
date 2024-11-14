import { css } from 'lit';

export const clusterStyles = css`
  /* ? The Cluster - Horizontally laid out elements */
  .cluster {
    display: flex;
    flex-wrap: wrap;
    gap: var(--gap, var(--space-s));
    justify-content: flex-start;
    align-items: center;
  }

  .cluster.justify-start {
    justify-content: flex-start;
  }

  .cluster.justify-end {
    justify-content: flex-end;
  }

  .cluster.justify-center {
    justify-content: center;
  }

  .cluster.justify-between {
    justify-content: space-between;
  }

  .cluster.justify-around {
    justify-content: space-around;
  }

  .cluster.justify-evenly {
    justify-content: space-evenly;
  }

  .cluster.align-start {
    align-items: flex-start;
  }

  .cluster.align-end {
    align-items: flex-end;
  }

  .cluster.align-center {
    align-items: center;
  }

  .cluster.align-baseline {
    align-items: baseline;
  }

  .cluster.align-stretch {
    align-items: stretch;
  }
`;
