export interface Project {
  _id: string;
  name: string;
  description?: string;
  detail?: string;
  imgUrls: string[];
  gifUrls: string[];
  videoUrls?: string[];
  stackList: string[];
  time: string;
  introduction: string;
  responsibility: string;
  link?: { value: string; desc: string };
}

export interface ProjectState {
  projects: { [id: string]: Project };
}

export enum ProjectActionType {}

export interface ProjectAction {
  type: ProjectActionType;
  payload: {};
}

export const initialProjectState: ProjectState = {
  projects: {
    autoreview: {
      _id: 'autoreview',
      name: 'AutoReview',
      time: '11.2022 - *4.2023',
      description: '一个基于web端的自动审核项目',
      imgUrls: [
        '/projects/autoreview/case_01.png',
        '/projects/autoreview/case_02.png',
        '/projects/autoreview/case_03.png',
        '/projects/autoreview/case_04.png',
        '/projects/autoreview/case_05.png'
      ],
      gifUrls: [],
      stackList: [
        'Nextjs',
        'Radix-UI',
        'tailwindcss',
        'Three.js',
        'TypeScript',
        'Python',
        'Django',
        'MySQL'
      ],
      introduction:
        '一个基于Nextjs框架对建筑图纸进行建模和规范审核的项目，使用Radix-UI组件库配合tailwindcss进行布局。几何显示通过Three.js实现。',
      responsibility: '本人负责部分交互逻辑，Three.js几何操作，后端，数据库，建模逻辑。',
      link: { value: '#', desc: '本项目暂不开源' }
    },
    chatglider: {
      _id: 'chatglider',
      name: 'ChatGlider',
      time: '3.2023 - 4.2023',
      description: '一个桌面端的划词翻译软件',
      imgUrls: [
        '/projects/chatglider/main_01.png',
        '/projects/chatglider/case_05.png',
        '/projects/chatglider/case_01.png',
        '/projects/chatglider/case_02.png',
        '/projects/chatglider/case_03.png',
        '/projects/chatglider/case_04.png'
      ],
      gifUrls: ['/projects/chatglider/intro.gif'],
      videoUrls: ['/projects/chatglider/video.mp4'],
      stackList: ['Electron', 'Vite', 'React', 'ChatGPT-API', 'TypeScript'],
      introduction:
        '一款基于Electron和Vite构建的桌面词汇翻译软件，翻译逻辑通过调用ChatGPT API实现。前端界面与交互采用React框架。',
      responsibility: '本人独立完成项目策划、设计、编码任务。',
      link: {
        value: 'https://github.com/LiuZhenyan-Wuzhong/ChatGlider',
        desc: 'LiuZhenyan-Wuzhong'
      }
    },
    sketch2param: {
      _id: 'sketch2param',
      name: 'Sketch2Param',
      time: '2.2022 - 3.2022',
      description: '一个将简单草图转为参数化模型的软件',
      imgUrls: [
        '/projects/sketch2param/case_01.png',
        '/projects/sketch2param/case_02.png',
        '/projects/sketch2param/case_03.png'
      ],
      gifUrls: [],
      videoUrls: [],
      stackList: ['Pytorch', 'HTML', 'CSS', 'JavaScript', 'Three.js'],
      introduction:
        '使用HTML \\ CSS \\ JavaScript实现的"手绘草图参数化建模"项目，重建逻辑使用基于Pytorch的深度学习模型(Res-Net)，几何显示使用Three.js库。',
      responsibility: '由本人独立完成项目编码工作。',
      link: {
        value: 'http://106.14.248.47:8000/predict/sketch2parameter/index3/',
        desc: 'sketch2parameter'
      }
    }
  }
};

const ProjectReducer = (
  state: ProjectState = initialProjectState,
  action: ProjectAction
): ProjectState => {
  switch (action.type) {
    default: {
      console.log(`Unknown ActionType ${action.type}`);
      return state;
    }
  }
};

export default ProjectReducer;
