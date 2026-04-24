export const NAV_ITEMS = ['Templates', 'About Us', 'Pricing', 'Enterprise']

export const FAQ_ITEMS = [
  {
    question: 'What is a project financial model?',
    answer:
      'A project financial model defines the expected costs, benefits, and return on investment for a project. It helps organizations evaluate whether an initiative is worth pursuing before committing resources.',
  },
  {
    question: 'What does the Model Builder do in Proconomics?',
    answer:
      'The Model Builder allows teams to create structured business cases by defining costs, benefits, assumptions, and timelines in a guided workflow that ensures consistency and clarity.',
  },
  {
    question: 'How is Model Builder different from Excel modeling?',
    answer:
      'Unlike Excel, Model Builder provides a structured environment where assumptions, cost tables, and benefit projections are standardized, making models easier to build, review, and compare.',
  },
  {
    question: 'Can I reuse models across projects?',
    answer:
      'Yes. Models can be duplicated or saved as templates so teams can standardize how projects are evaluated and reduce the time required to build new business cases.',
  },
]

export const FEATURES = [
  {
    label: 'Project Overview',
    semanticTitle:
      'Project Financial Model Overview and Business Case Definition',
    title: 'Give leadership the full picture before they ask for it',
    body: "When a sponsor asks 'what is this project actually solving?' or an executive wants context before reviewing the numbers, the overview is ready, not a different format for every analyst on the team. No hunting through emails, no conflicting slide decks. Just a clear, defensible narrative tied directly to the financial model.",
    image: '/images/project-financial-model-dashboard.png',
    alt: 'project financial model overview',
  },
  {
    label: 'Cost Modeling',
    semanticTitle: 'Project Cost Modeling and Investment Planning',
    title: 'See exactly where every dollar goes before you spend it',
    body: 'Map project costs across categories and timelines. Break down capital expenditure, operating costs, and resource allocation into a structured view that shows when money leaves the organization and what it funds so finance teams can challenge assumptions before they become budget overruns.',
    image: '/images/project-cost-table.png',
    alt: 'business case modeling software cost and benefit tables',
  },
  {
    label: 'Benefit Modeling & Realization Curves',
    semanticTitle: 'Benefit Forecasting and ROI Modeling',
    title: 'Show when the value arrives, not just that it will',
    body: 'Define expected benefits, cost savings, revenue uplift, efficiency gains, and map them against a realistic realization curve. Show stakeholders not just the total projected value, but when the organization will start seeing returns and at what rate.',
    image: '/images/project-benefits-table.png',
    alt: 'project financial model dashboard showing ROI NPV IRR',
  },
  {
    label: 'Assumptions Management',
    semanticTitle: 'Financial Assumptions Management and Model Logic',
    title: 'The numbers are only as good as the logic behind them',
    body: 'Model Builder centralizes every key assumption from cost of capital to discount rate, adoption curves, and headcount multipliers in one governed place. When assumptions change, the model updates. When someone questions a figure, the audit trail shows who set it, when, and why.',
    image: '/images/model-builder-assumption-table.png',
    alt: 'project financial model overview with assumptions and benefits',
  },
  {
    label: 'Scenario Planning & Sensitivity Analysis',
    semanticTitle: 'Scenario Planning and Financial Sensitivity Analysis',
    title: 'Stop Presenting One Number. Start Presenting the Full Range.',
    body: 'Walk into the board room with confidence. Build and compare multiple scenarios; best case, worst case, and most likely directly within the model. Toggle macro-variables like churn rate, cost of capital, or market adoption, and watch the real-time impact on NPV, IRR, and payback.',
    image: '/images/scenario-planning-roi-model.png',
    alt: 'scenario planning financial model interface',
  },
  {
    label: 'Executive Dashboard',
    semanticTitle: 'Executive Financial Dashboard and ROI Insights',
    title: 'From Model to Decision in One View.',
    body: "Stakeholders don't need to understand the model to understand the outcome. The Dashboard is built for the executive audience: high signal, low noise, immediately actionable. Export it for a board pack. Share a link for live review. Present it in the room with confidence. The Model Builder Dashboard converts your structured inputs into an executive-ready financial summary; NPV, IRR, payback period, cumulative cash flow, and benefit realization curves in one clean, shareable view.",
    image: '/images/model-builder-dashboard.png',
    alt: 'ROI dashboard showing project cash flow and payback',
  },
]

export const TESTIMONIALS = [
  {
    quote:
      'We used to spend two weeks building a business case. Now we have a submission-ready model in under a day with scenario comparisons the CFO actually engages with instead of just approving blindly.',
    name: 'Jerry Paul',
    role: 'Finance Director, Enterprise Technology Company',
    image: '/images/jerry-paul.png',
  },
  {
    quote:
      "The assumption documentation alone has saved us from three bad investment decisions. When assumptions are explicit, the conversation changes from 'is this number right?' to 'is this assumption reasonable?'",
    name: 'Jimmy Walker',
    role: 'VP of Finance, Global Professional Services Firm',
    image: '/images/jimmy-walker.png',
  },
]
