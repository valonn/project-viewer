import {InMemoryDbService} from 'angular-in-memory-web-api';
import {Project} from '../model/project.model';
import {ProjectContent} from '../model/project-content.model';

export class InMemoryDataService implements InMemoryDbService {
  createDb(): any {
    const projects: Project[] = [
      {
        id: '615faf4c-c644-11eb-b8bc-0242ac130003',
        name: 'Project A',
        parentId: null
      },
      {
        id: '70dfdc12-c644-11eb-b8bc-0242ac130003',
        name: 'Project A1',
        parentId: '615faf4c-c644-11eb-b8bc-0242ac130003'
      },
      {
        id: '6aa5ab4a-6063-4591-97c1-c89f0f185a54',
        name: 'Project A1.1',
        parentId: '70dfdc12-c644-11eb-b8bc-0242ac130003'
      },
      {
        id: 'b286b83d-3004-4a89-ba04-093ed389c15b',
        name: 'Project A1.1.1',
        parentId: '6aa5ab4a-6063-4591-97c1-c89f0f185a54'
      },
      {
        id: '99d8114f-1aef-445a-9259-4caf9964aaf4',
        name: 'Project A1.1.2',
        parentId: '6aa5ab4a-6063-4591-97c1-c89f0f185a54'
      },
      {
        id: '7ff79398-f732-4e3e-8796-a9310a37495f',
        name: 'Project A1.1.3',
        parentId: '6aa5ab4a-6063-4591-97c1-c89f0f185a54'
      },
      {
        id: '2a1c96cb-58f2-4de5-9325-3ddd87d82998',
        name: 'Project A1.2',
        parentId: '70dfdc12-c644-11eb-b8bc-0242ac130003'
      },
      {
        id: 'd048ee2c-9a15-491f-8ade-b69ac5c2a014',
        name: 'Project B',
        parentId: null
      },
      {
        id: '48a2af4f-d777-4a10-a770-b4c4dad19edf',
        name: 'Project B.1',
        parentId: 'd048ee2c-9a15-491f-8ade-b69ac5c2a014'
      },
      {
        id: 'a1f8b21d-e05c-4f9e-8201-bb20edb46331',
        name: 'Project B.1.1',
        parentId: '48a2af4f-d777-4a10-a770-b4c4dad19edf'
      },
      {
        id: 'c21f0961-cb93-43ae-9065-42faef760747',
        name: 'Project B.1.2',
        parentId: '48a2af4f-d777-4a10-a770-b4c4dad19edf'
      },
      {
        id: '1db8925e-adff-4d63-b5f5-b4c7930ee34d',
        name: 'Project B.1.3',
        parentId: '48a2af4f-d777-4a10-a770-b4c4dad19edf'
      },
      {
        id: 'ec692212-8389-4564-b078-e004df1222f6',
        name: 'Project B.2',
        parentId: 'd048ee2c-9a15-491f-8ade-b69ac5c2a014'
      },
    ];
    const projectContent: ProjectContent[] = [
      {
        type: 'task',
        title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
        assignee: {
          name: 'John'
        },
        reporter: {
          name: 'Doe'
        },
        status: 'IN_PROGRESS',
        projectId: '615faf4c-c644-11eb-b8bc-0242ac130003',
      },
      {
        type: 'task',
        title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
        assignee: {
          name: 'John'
        },
        reporter: {
          name: 'Doe'
        },
        status: 'IN_PROGRESS',
        projectId: 'd048ee2c-9a15-491f-8ade-b69ac5c2a014'
      },
      {
        type: 'note',
        text: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque' +
          ' laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis' +
          ' et quasi architecto beatae vitae dicta sunt explicabo',
        projectId: '615faf4c-c644-11eb-b8bc-0242ac130003',
      },
      {
        type: 'task',
        title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
        assignee: {
          name: 'John'
        },
        reporter: {
          name: 'Doe'
        },
        status: 'IN_PROGRESS',
        projectId: '615faf4c-c644-11eb-b8bc-0242ac130003',
      },
      {
        type: 'attachment',
        name: 'Lorem_5.png',
        url: '',
        projectId: '615faf4c-c644-11eb-b8bc-0242ac130003',
      },
      {
        type: 'note',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor' +
          ' incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud ' +
          'exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        projectId: '615faf4c-c644-11eb-b8bc-0242ac130003',
      },
      {
        type: 'task',
        title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
        assignee: {
          name: 'John'
        },
        reporter: {
          name: 'Doe'
        },
        status: 'IN_PROGRESS',
        projectId: 'd048ee2c-9a15-491f-8ade-b69ac5c2a014'
      },
      {
        type: 'attachment',
        name: 'Lorem_3.svg',
        url: '',
        projectId: '615faf4c-c644-11eb-b8bc-0242ac130003'
      },
      {
        type: 'note',
        text: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque' +
          ' laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi' +
          ' architecto beatae vitae dicta sunt explicabo',
        projectId: 'd048ee2c-9a15-491f-8ade-b69ac5c2a014'
      },
      {
        type: 'attachment',
        name: 'Lorem_2.pdf',
        url: '',
        projectId: '615faf4c-c644-11eb-b8bc-0242ac130003'
      },
      {
        type: 'note',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor' +
          ' incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud ' +
          'exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        projectId: 'd048ee2c-9a15-491f-8ade-b69ac5c2a014'
      },
      {
        type: 'attachment',
        name: 'Lorem_File_1.pdf',
        url: '',
        projectId: 'd048ee2c-9a15-491f-8ade-b69ac5c2a014'
      },
    ];
    return {projects, 'project-content': projectContent};
  }
}
